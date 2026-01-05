/**
 * Finds connected non-transparent components in image data using BFS.
 * 
 * @param {ImageDataArray} data 
 * The raw pixel data (RGBA).
 * 
 * @param {number} width 
 * The width of the image.
 * 
 * @param {number} height 
 * The height of the image.
 * 
 * @param {number} [min_pixels=10] 
 * Minimum number of pixels for a component to be kept.
 * 
 * @returns {Array<{pixels: number[][], minX: number, minY: number, maxX: number, maxY: number}>|null} 
 * An array of components or null if only 1 or 0 found.
 */
function findConnectedComponents(data, width, height, min_pixels = 10) {
    const visited = new Uint8Array(width * height);
    const components = [];

    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            const i = y * width + x;
            if (data[i * 4 + 3] === 0 || visited[i]) continue;

            visited[i] = 1;

            const componentPixels = [];
            const queue = [[x, y]];
            let minX = x, minY = y, maxX = x, maxY = y;

            let head = 0;
            while (head < queue.length) {
                const [px, py] = queue[head++];
                componentPixels.push([px, py]);

                minX = Math.min(minX, px);
                minY = Math.min(minY, py);
                maxX = Math.max(maxX, px);
                maxY = Math.max(maxY, py);

                for (let dy = -1; dy <= 1; dy++) {
                    for (let dx = -1; dx <= 1; dx++) {
                        if (dx === 0 && dy === 0) continue;
                        const nx = px + dx;
                        const ny = py + dy;

                        if (nx >= 0 && nx < width && ny >= 0 && ny < height) {
                            const ni = ny * width + nx;
                            if (data[ni * 4 + 3] > 0 && !visited[ni]) {
                                visited[ni] = 1;
                                queue.push([nx, ny]);
                            }
                        }
                    }
                }
            }

            if (componentPixels.length > min_pixels)
                components.push({ pixels: componentPixels, minX, minY, maxX, maxY });
        }
    }

    if (components.length <= 1) return null;
    return components;
}


/**
 * Splits a Fabric.js image into multiple images based on transparent gaps.
 * 
 * @param {fabric.Image} fabricImage 
 * The source Fabric.js image.
 * 
 * @returns {fabric.Image[]|null} 
 * An array of new Fabric.js images or null if no split occurred.
 */
export function splitByTransparency(fabricImage) {
    const sourceCanvas = fabricImage.toCanvasElement({ withoutTransform: true, withoutShadow: true });
    const ctx = sourceCanvas.getContext("2d");
    const imageData = ctx.getImageData(0, 0, sourceCanvas.width, sourceCanvas.height);
    const { width, height, data } = imageData;

    const components = findConnectedComponents(data, width, height);
    if (!components) return null;

    const newImages = [];
    const originalCenterPt = fabricImage.getCenterPoint();
    const angleRad = fabric.util.degreesToRadians(fabricImage.angle);
    const cos = Math.cos(angleRad);
    const sin = Math.sin(angleRad);

    components.forEach((comp) => {
        const compWidth = comp.maxX - comp.minX + 1;
        const compHeight = comp.maxY - comp.minY + 1;

        const compCanvas = document.createElement("canvas");
        compCanvas.width = compWidth;
        compCanvas.height = compHeight;
        const compCtx = compCanvas.getContext("2d");
        const newImageData = compCtx.createImageData(compWidth, compHeight);

        comp.pixels.forEach(([px, py]) => {
            const oldIndex = (py * width + px) * 4;
            const newIndex = ((py - comp.minY) * compWidth + (px - comp.minX)) * 4;
            for (let i = 0; i < 4; i++)
                newImageData.data[newIndex + i] = data[oldIndex + i];
        });

        compCtx.putImageData(newImageData, 0, 0);

        const delta = { x: comp.minX + compWidth / 2 - width / 2, y: comp.minY + compHeight / 2 - height / 2 };
        const scaled = { x: delta.x * fabricImage.scaleX, y: delta.y * fabricImage.scaleY, };
        const rotated = { x: scaled.x * cos - scaled.y * sin, y: scaled.x * sin + scaled.y * cos, };

        const newImg = new fabric.Image(compCanvas, {
            left: originalCenterPt.x + rotated.x,
            top: originalCenterPt.y + rotated.y,
            angle: fabricImage.angle,
            scaleX: fabricImage.scaleX,
            scaleY: fabricImage.scaleY,
            flipX: fabricImage.flipX,
            flipY: fabricImage.flipY,
            originX: "center",
            originY: "center",
        });
        newImages.push(newImg);
    });

    return newImages;
}
