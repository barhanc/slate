import * as ort from '../public/ort.webgpu.mjs';

ort.env.wasm.wasmPaths = 'https://cdn.jsdelivr.net/npm/onnxruntime-web@1.20.1/dist/';

let session = null;
const modelDim = 512;


async function createInferenceSession() {
    if (session) return;

    const cache = await caches.open('onnx-models');
    const modelUrl = "https://huggingface.co/g-ronimo/lama/resolve/main/lama_fp32.onnx";

    let response = await cache.match(modelUrl);
    if (!response) {
        console.log("Downloading ONNX model...");
        response = await fetch(modelUrl);
        if (response.ok) await cache.put(modelUrl, response.clone());
    }

    const modelBuffer = await response.arrayBuffer();
    session = await ort.InferenceSession.create(modelBuffer);
}

/**
 * 
 * @param {Float32Array} imageData 
 * @param {Float32Array} maskData 
 */
async function runInference(imageData, maskData) {
    if (imageData.length !== 3 * modelDim * modelDim) throw "Invalid image data length";
    if (maskData.length !== modelDim * modelDim) throw "Invalid mask data length";

    console.log("Creating session...");
    await createInferenceSession();

    const imageDims = [1, 3, modelDim, modelDim];
    const maskDims = [1, 1, modelDim, modelDim];

    const imageTensor = new ort.Tensor('float32', imageData, imageDims);
    const maskTensor = new ort.Tensor('float32', maskData, maskDims);

    console.log("Running session...")
    const results = await session.run({ image: imageTensor, mask: maskTensor });

    /**@type {Float32Array} */
    const outputData = results.output.data;

    console.log("Inference successful:", outputData);
    return outputData;
}

/**
 * 
 * @param {fabric.Image} target 
 * @param {fabric.Path} path 
 */
export async function inpaint(target, path) {
    const width = modelDim;
    const height = modelDim;

    // 1. Prepare Image Data (Resize to dimxdim)
    const imgCanvas = document.createElement('canvas');
    imgCanvas.width = width;
    imgCanvas.height = height;
    const imgCtx = imgCanvas.getContext('2d');

    // Use the original element to avoid quality loss before downscaling
    const originalImgElem = target.toCanvasElement({ withoutTransform: true, withoutShadow: true });
    imgCtx.drawImage(originalImgElem, 0, 0, width, height);
    const imgData = imgCtx.getImageData(0, 0, width, height);

    // 2. Prepare Mask Data (Project path to dimxdim image space)
    const maskCanvas = document.createElement('canvas');
    maskCanvas.width = width;
    maskCanvas.height = height;
    const fMaskCanvas = new fabric.StaticCanvas(maskCanvas, { enableRetinaScaling: false });

    // Calculate transform: Global Canvas -> Local Image -> dimxdim
    const invTargetMatrix = fabric.util.invertTransform(target.calcTransformMatrix());

    let offsetX = 0;
    let offsetY = 0;
    if (target.originX === "center") offsetX = target.width / 2;
    if (target.originY === "center") offsetY = target.height / 2;

    const shiftMatrix = [1, 0, 0, 1, offsetX, offsetY];
    const scaleMatrix = [width / target.width, 0, 0, height / target.height, 0, 0];

    const totalMatrix = fabric.util.multiplyTransformMatrices(
        scaleMatrix,
        fabric.util.multiplyTransformMatrices(shiftMatrix, invTargetMatrix)
    );

    fMaskCanvas.setViewportTransform(totalMatrix);

    path.stroke = "white";
    path.fill = null;

    fMaskCanvas.add(path);
    fMaskCanvas.renderAll();

    const maskData = fMaskCanvas.getContext().getImageData(0, 0, width, height);

    // 3. Convert to Tensors (NCHW, Float32, 0-1)
    const floatImg = new Float32Array(3 * width * height);
    const floatMask = new Float32Array(width * height);

    for (let i = 0; i < width * height; i++) {
        floatImg[i] = imgData.data[i * 4] / 255.0;
        floatImg[i + width * height] = imgData.data[i * 4 + 1] / 255.0;
        floatImg[i + 2 * width * height] = imgData.data[i * 4 + 2] / 255.0;
        floatMask[i] = maskData.data[i * 4 + 3] > 0 ? 1.0 : 0.0;
    }

    // 4. Run Inference
    const output = await runInference(floatImg, floatMask);

    // 5. Reconstruct Image
    const resultCanvas = document.createElement('canvas');
    resultCanvas.width = width;
    resultCanvas.height = height;
    const resultCtx = resultCanvas.getContext('2d');
    const resultImgData = resultCtx.createImageData(width, height);

    for (let i = 0; i < width * height; i++) {
        resultImgData.data[i * 4] = output[i];
        resultImgData.data[i * 4 + 1] = output[i + width * height];
        resultImgData.data[i * 4 + 2] = output[i + 2 * width * height];
        resultImgData.data[i * 4 + 3] = 255;
    }
    resultCtx.putImageData(resultImgData, 0, 0);

    // 6. Create new Fabric Image
    const newImage = new fabric.Image(resultCanvas, {
        left: target.left,
        top: target.top,
        angle: target.angle,
        originX: target.originX,
        originY: target.originY,
        flipX: target.flipX,
        flipY: target.flipY,
    });

    // Adjust scale to match original visual size
    newImage.scaleX = (target.width * target.scaleX) / width;
    newImage.scaleY = (target.height * target.scaleY) / height;

    return newImage;
}
