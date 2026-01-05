import { inpaint } from "./inpaint.js";
import { splitByTransparency } from "./splitByTransparency.js";
import { removeBackground } from "@imgly/background-removal";

// ========================================================
// Canvas Setup
// ========================================================

const canvas = new fabric.Canvas("c", { selection: true, preserveObjectStacking: true });
canvas.isDragging = false;
canvas.lastPosX = 0;
canvas.lastPosY = 0;

// ========================================================
// History System
// ========================================================

let isHistoryProcessing = false;
/** @type {string} */
let canvasState;
/** @type {string[]} */
let historyUndo = [];
/** @type {string[]} */
let historyRedo = [];

function save() {
    const maxLength = 20;

    if (isHistoryProcessing) return;
    if (canvasState) historyUndo.push(canvasState);
    if (historyUndo.length > maxLength) historyUndo.shift();

    canvasState = JSON.stringify(canvas.toJSON())
    historyRedo = [];

    document.getElementById("btn-undo").disabled = historyUndo.length === 0;
    document.getElementById("btn-redo").disabled = historyRedo.length === 0;
}

/**
 * @param {string[]} popStack 
 * @param {string[]} pushStack 
 */
function replay(popStack, pushStack) {
    if (popStack.length === 0) return;
    isHistoryProcessing = true;

    pushStack.push(canvasState);
    canvasState = popStack.pop();

    canvas.loadFromJSON(canvasState, () => { canvas.renderAll(); isHistoryProcessing = false; })

    document.getElementById("btn-undo").disabled = historyUndo.length === 0;
    document.getElementById("btn-redo").disabled = historyRedo.length === 0;
}

// ========================================================
// Canvas Helpers
// ========================================================

function resizeCanvas() {
    canvas.setWidth(window.innerWidth);
    canvas.setHeight(window.innerHeight);
    canvas.renderAll();
}

/** @param {File} file */
function uploadImage(file) {
    if (!file || !file.type.startsWith("image/")) return;

    const url = URL.createObjectURL(file);
    const imgElement = new Image();
    imgElement.src = url;

    imgElement.onload = () => {
        const maxWidth = 600;
        const scale = Math.min(1, maxWidth / imgElement.width);

        const offScreenCanvas = document.createElement('canvas');
        offScreenCanvas.width = imgElement.width * scale;
        offScreenCanvas.height = imgElement.height * scale;

        const ctx = offScreenCanvas.getContext('2d');
        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = 'high';
        ctx.drawImage(imgElement, 0, 0, offScreenCanvas.width, offScreenCanvas.height);

        const resizedImage = new fabric.Image(offScreenCanvas, {
            left: canvas.getVpCenter().x,
            top: canvas.getVpCenter().y,
            originX: "center",
            originY: "center"
        });

        canvas.add(resizedImage);
        canvas.setActiveObject(resizedImage);
        
        URL.revokeObjectURL(url);
    };
}

function updateCtxBar() {
    const active = canvas.getActiveObject();
    const ctxBar = document.getElementById("context-bar");
    const ctxButtons = {
        activeImage: [
            document.getElementById("ctx-eraser"),
            document.getElementById("ctx-split"),
            document.getElementById("ctx-remove-bg"),
            document.getElementById("ctx-inpaint")
        ],
        activeSelection: [
            document.getElementById("ctx-merge"),
        ]
    };

    if (!active) {
        ctxBar.style.display = "none";
        return;
    }

    ctxBar.style.display = "flex";
    ctxButtons.activeImage.forEach((btn) => { btn.style.opacity = "0.3"; });
    ctxButtons.activeSelection.forEach((btn) => { btn.style.opacity = "0.3"; });

    if (active.type === "image")
        ctxButtons.activeImage.forEach((btn) => { btn.style.opacity = "1"; });

    if (active.type === "activeSelection" && active.getObjects("image").length > 1)
        ctxButtons.activeSelection.forEach((btn) => { btn.style.opacity = "1"; });

    // Compute position of the context bar; we want it just above the object
    const bound = active.getBoundingRect();
    const padding = 60;
    const barWidth = ctxBar.offsetWidth;
    const barHeight = ctxBar.offsetHeight;

    let top = bound.top - barHeight - padding;
    let left = bound.left + bound.width / 2 - barWidth / 2;

    if (top < 10) top = bound.top + bound.height + padding;
    if (left < 10) left = 10;
    if (left + barWidth > window.innerWidth) left = window.innerWidth - barWidth - 10;

    ctxBar.style.top = `${top}px`;
    ctxBar.style.left = `${left}px`;
}

window.addEventListener("resize", resizeCanvas);
window.addEventListener("paste", (e) => {
    if (!e.clipboardData || !e.clipboardData.items) return;
    for (const item of e.clipboardData.items) {
        uploadImage(item.getAsFile());
    }
});


// ========================================================
// Canvas Interaction
// ========================================================

// --- Inpainting
canvas.on("path:created", async (opt) => {
    if (!canvas.inpaintTarget) return;

    /**@type {fabric.Path} */
    const path = opt.path;
    /**@type {fabric.Object} */
    const target = canvas.inpaintTarget;

    const clipper = new fabric.Rect({
        left: target.left,
        top: target.top,
        width: target.getScaledWidth(),
        height: target.getScaledHeight(),
        angle: target.angle,
        originX: target.originX,
        originY: target.originY,
        absolutePositioned: true
    });

    path.set({ clipPath: clipper, selectable: false, evented: false });

    canvas.isDrawingMode = false;
    canvas.defaultCursor = "default";
    canvas.inpaintTarget = null;

    target.hoverCursor = "move";

    const overlay = document.getElementById("loading-overlay");
    overlay.style.display = "flex";

    try {
        throw Error("Not Implemented!");
    }
    catch (err) {
        console.error(err);
        canvas.setActiveObject(target);
    }
    finally {
        overlay.style.display = "none";
        canvas.remove(path);
        canvas.requestRenderAll();
    }
});
// --------------------------------------------------------

// --- Erasing
canvas.on("erasing:end", (opt) => {
    if (!opt.targets || opt.targets.length === 0) return

    canvas.isDrawingMode = false;
    canvas.defaultCursor = "default";

    const target = opt.targets[0];
    target.hoverCursor = "move";

    canvas.setActiveObject(target);
    canvas.requestRenderAll();
});
// --------------------------------------------------------

// --- Zoom (Mouse scroll)
canvas.on("mouse:wheel", (opt) => {
    const delta = opt.e.deltaY;
    let zoom = canvas.getZoom();
    zoom *= 0.999 ** delta;
    if (zoom > 20) zoom = 20;
    if (zoom < 0.1) zoom = 0.1;
    canvas.zoomToPoint({ x: opt.e.offsetX, y: opt.e.offsetY }, zoom);
    opt.e.preventDefault();
    opt.e.stopPropagation();
});
// --------------------------------------------------------

// --- Pan (Alt + Drag)
canvas.on("mouse:down", (opt) => {
    const evt = opt.e;
    if (evt.altKey === true) {
        canvas.isDragging = true;
        canvas.selection = false;
        canvas.lastPosX = evt.clientX;
        canvas.lastPosY = evt.clientY;
    }
});

canvas.on("mouse:move", (opt) => {
    if (canvas.isDragging) {
        const e = opt.e;
        const vpt = canvas.viewportTransform;
        vpt[4] += e.clientX - canvas.lastPosX;
        vpt[5] += e.clientY - canvas.lastPosY;
        canvas.requestRenderAll();
        canvas.lastPosX = e.clientX;
        canvas.lastPosY = e.clientY;
    }
});

canvas.on("mouse:up", () => {
    if (canvas.isDragging) {
        canvas.setViewportTransform(canvas.viewportTransform);
        canvas.isDragging = false;
        canvas.defaultCursor = "default";
        canvas.selection = true;
    }
});
// --------------------------------------------------------

// --- Other
const events = {
    save: [
        "object:added",
        "object:modified",
        "object:removed",
    ],
    updateCtxBar: [
        "selection:created",
        "selection:updated",
        "selection:cleared",
        "object:moving",
        "object:scaling",
        "object:rotating",
        "mouse:up",
        "mouse:wheel",
        "erasing:end",
        "path:created",
    ],
}
events.updateCtxBar.forEach((e) => canvas.on(e, updateCtxBar));
events.save.forEach((e) => canvas.on(e, save));
// --------------------------------------------------------

// ========================================================
// Context Menu Actions
// ========================================================

document.getElementById("ctx-inpaint").onclick = () => {
    const active = canvas.getActiveObject();
    if (!active || active.type !== "image") return;

    canvas.freeDrawingBrush = new fabric.PencilBrush(canvas);
    canvas.freeDrawingBrush.width = 20;
    canvas.freeDrawingBrush.color = "#6365f17a";
    canvas.isDrawingMode = true;
    canvas.inpaintTarget = active;

    active.hoverCursor = "crosshair";

    canvas.discardActiveObject();
    canvas.requestRenderAll();
};

document.getElementById("ctx-remove-bg").onclick = async () => {
    const active = canvas.getActiveObject();
    if (!active || active.type !== "image") return;

    const overlay = document.getElementById("loading-overlay");
    overlay.style.display = "flex";

    try {
        const imageSrc = active.getSrc();
        const blob = await removeBackground(imageSrc, { model: "isnet_quint8" })
        const url = URL.createObjectURL(blob);

        fabric.Image.fromURL(url, (img) => {
            img.set({
                left: active.left,
                top: active.top,
                angle: active.angle,
                scaleX: active.scaleX,
                scaleY: active.scaleY,
                originX: active.originX,
                originY: active.originY,
            });

            canvas.add(img);
            canvas.remove(active);
            canvas.setActiveObject(img);
            canvas.requestRenderAll();
        });
    }
    catch (err) {
        console.error(err);
    }
    finally {
        overlay.style.display = "none";
    }
};

document.getElementById("ctx-eraser").onclick = () => {
    const active = canvas.getActiveObject();
    if (!active || active.type !== "image") return

    canvas.freeDrawingBrush = new fabric.EraserBrush(canvas);
    canvas.freeDrawingBrush.width = 20;
    canvas.isDrawingMode = true;
    canvas.getObjects().forEach((obj) => { obj.erasable = false; });

    active.hoverCursor = "crosshair";
    active.erasable = true;

    canvas.discardActiveObject();
    canvas.requestRenderAll();
};

document.getElementById("ctx-split").onclick = () => {
    const active = canvas.getActiveObject();
    if (!active || active.type !== "image") return;

    const newImages = splitByTransparency(active);
    if (!newImages || newImages.length === 0) return;

    newImages.forEach((img) => canvas.add(img));
    canvas.remove(active);
    canvas.setActiveObject(new fabric.ActiveSelection(newImages, { canvas: canvas }));
    canvas.requestRenderAll();
};

document.getElementById("ctx-merge").onclick = () => {
    const active = canvas.getActiveObject();
    if (!active || active.type !== "activeSelection") return

    const imagesToMerge = active.getObjects("image");
    if (imagesToMerge.length < 2) return

    const dataURL = active.toDataURL();
    fabric.Image.fromURL(dataURL, (mergedImage) => {
        mergedImage.set({ left: active.left, top: active.top, originX: "left", originY: "top" });
        canvas.add(mergedImage);
        canvas.remove(...imagesToMerge);
        canvas.setActiveObject(mergedImage);
        canvas.requestRenderAll();
    });
};

document.getElementById("ctx-delete").onclick = () => {
    const active = canvas.getActiveObject();
    if (!active) return;

    if (active.type === "activeSelection") active.forEachObject((o) => canvas.remove(o));
    else canvas.remove(active);

    canvas.discardActiveObject();
    canvas.requestRenderAll();
};

document.getElementById("ctx-back").onclick = () => {
    const active = canvas.getActiveObject();
    if (!active) return;

    canvas.sendToBack(active);
    canvas.discardActiveObject();
    canvas.requestRenderAll();
};

document.getElementById("ctx-clone").onclick = () => {
    const active = canvas.getActiveObject();
    if (!active) return;

    active.clone((cloned) => {
        const offset = 20;
        cloned.set({ left: cloned.left + offset, top: cloned.top + offset, evented: true });

        if (cloned.type === "activeSelection") {
            cloned.canvas = canvas;
            cloned.forEachObject((obj) => { canvas.add(obj); });
            cloned.setCoords();
        }
        else {
            canvas.add(cloned);
        }

        canvas.discardActiveObject();
        canvas.setActiveObject(cloned);
        canvas.requestRenderAll();
    });
};

document.getElementById("ctx-flip-h").onclick = () => {
    const active = canvas.getActiveObject();
    if (!active) return;

    active.set("flipX", !active.flipX);
    canvas.requestRenderAll();
};

document.getElementById("ctx-download").onclick = () => {
    const active = canvas.getActiveObject();
    if (!active) return;

    const dataURL = active.toDataURL({ format: "png", multiplier: 4 });
    const link = document.createElement("a");

    link.download = "image.png";
    link.href = dataURL;

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};

// ========================================================
// Toolbar Actions
// ========================================================

document.getElementById("btn-upload").onchange = (e) => {
    if (!e.target || !e.target.files) return;
    for (const file of e.target.files)
        uploadImage(file)
};

document.getElementById("btn-undo").onclick = () => { replay(historyUndo, historyRedo) };

document.getElementById("btn-redo").onclick = () => { replay(historyRedo, historyUndo) };

document.getElementById("btn-clear").onclick = () => { if (confirm("Clear entire canvas?")) canvas.clear(); };

// ========================================================
// Startup
// ========================================================

resizeCanvas();
updateCtxBar();
save();