// -------------------------------------------------------------------
// Initialization
// -------------------------------------------------------------------

// Canvas
const canvas = new fabric.Canvas("c", {
  backgroundColor: "#f0f0f0",
  selection: true,
  preserveObjectStacking: true,
});

// Application State
let isDragging = false;
let lastPosX = 0;
let lastPosY = 0;

// Undo/Redo State
const MAX_HISTORY = 50;
let history = [];
let historyRedo = [];
let isHistoryProcessing = false;

// UI Elements
const contextBar = document.getElementById("context-bar");

// Resize logic
function resizeCanvas() {
  canvas.setWidth(window.innerWidth);
  canvas.setHeight(window.innerHeight);
  canvas.renderAll();
}
window.addEventListener("resize", resizeCanvas);
resizeCanvas();

// -------------------------------------------------------------------
// Canvas zoom & pan
// -------------------------------------------------------------------

// Zoom
canvas.on("mouse:wheel", function (opt) {
  const delta = opt.e.deltaY;
  let zoom = canvas.getZoom();
  zoom *= 0.999 ** delta;
  if (zoom > 20) zoom = 20;
  if (zoom < 0.1) zoom = 0.1;
  canvas.zoomToPoint({ x: opt.e.offsetX, y: opt.e.offsetY }, zoom);
  opt.e.preventDefault();
  opt.e.stopPropagation();
});

// Pan (Alt + Drag)
canvas.on("mouse:down", function (opt) {
  const evt = opt.e;
  if (evt.altKey === true) {
    isDragging = true;
    canvas.selection = false;
    lastPosX = evt.clientX;
    lastPosY = evt.clientY;
  }
});

canvas.on("mouse:move", function (opt) {
  if (isDragging) {
    const e = opt.e;
    const vpt = canvas.viewportTransform;
    vpt[4] += e.clientX - lastPosX;
    vpt[5] += e.clientY - lastPosY;
    canvas.requestRenderAll();
    lastPosX = e.clientX;
    lastPosY = e.clientY;
  }
});

canvas.on("mouse:up", function (opt) {
  if (isDragging) {
    canvas.setViewportTransform(canvas.viewportTransform);
    isDragging = false;
    canvas.defaultCursor = "default";
    canvas.selection = true;
  }
});

// -------------------------------------------------------------------
// Context Bar Logic
// -------------------------------------------------------------------

function updateContextBar() {
  const activeObj = canvas.getActiveObject();

  if (!activeObj) {
    contextBar.classList.remove("visible");
    contextBar.style.display = "none";
    return;
  }

  // Calculate Position; we want it just above the object
  const bound = activeObj.getBoundingRect();
  const padding = 60;
  const barHeight = 50;
  const barWidth = 220;

  let top = bound.top - barHeight - padding;
  let left = bound.left + bound.width / 2 - barWidth / 2;

  // Boundary checks (keep inside screen)
  if (top < 10) top = bound.top + bound.height + padding; // Flip to bottom if too high
  if (left < 10) left = 10;
  if (left + barWidth > window.innerWidth)
    left = window.innerWidth - barWidth - 10;

  contextBar.style.top = `${top}px`;
  contextBar.style.left = `${left}px`;
  contextBar.style.display = "flex";
}

// Listen to selection events
canvas.on("selection:created", updateContextBar);
canvas.on("selection:updated", updateContextBar);
canvas.on("selection:cleared", updateContextBar);
canvas.on("object:moving", updateContextBar);
canvas.on("object:scaling", updateContextBar);
canvas.on("object:rotating", updateContextBar);
canvas.on("mouse:up", updateContextBar);
canvas.on("mouse:wheel", updateContextBar);

// -------------------------------------------------------------------
// Context Actions
// -------------------------------------------------------------------

// TODO: Eraser
document.getElementById("ctx-eraser").onclick = () => {};

// Delete
document.getElementById("ctx-delete").onclick = () => {
  const active = canvas.getActiveObject();
  if (active) {
    // Check if multiple selection
    if (active.type === "activeSelection") {
      active.forEachObject((o) => canvas.remove(o));
      canvas.discardActiveObject();
    } else {
      canvas.remove(active);
    }
    canvas.requestRenderAll();
  }
};

// Move to Back
document.getElementById("ctx-back").onclick = () => {
  const active = canvas.getActiveObject();
  if (active) {
    canvas.sendToBack(active);
    canvas.discardActiveObject(); // Refresh selection to avoid visual glitches
    canvas.requestRenderAll();
  }
};

// Copy (Clone)
document.getElementById("ctx-copy").onclick = () => {
  const active = canvas.getActiveObject();
  if (active) {
    active.clone(function (cloned) {
      canvas.discardActiveObject();
      cloned.set({
        left: cloned.left + 20,
        top: cloned.top + 20,
        evented: true,
      });
      if (cloned.type === "activeSelection") {
        // Active selection needs special handling
        cloned.canvas = canvas;
        cloned.forEachObject(function (obj) {
          canvas.add(obj);
        });
        cloned.setCoords();
      } else {
        canvas.add(cloned);
      }
      canvas.setActiveObject(cloned);
      canvas.requestRenderAll();
    });
  }
};

// Download
document.getElementById("ctx-download").onclick = () => {
  const active = canvas.getActiveObject();
  if (active) {
    const dataURL = active.toDataURL({
      format: "png",
      multiplier: 4, // High Res
    });
    const link = document.createElement("a");
    link.download = "image.png";
    link.href = dataURL;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
};

// -------------------------------------------------------------------
// Global Actions
// -------------------------------------------------------------------

// Upload
document.getElementById("imgLoader").addEventListener("change", function (e) {
  const file = e.target.files[0];
  if (!file) return;

  const reader = new FileReader();

  reader.onload = function (f) {
    fabric.Image.fromURL(f.target.result, function (img) {
      if (img.width > 800) img.scaleToWidth(800);
      const center = canvas.getVpCenter();

      img.set({
        left: center.x,
        top: center.y,
        originX: "center",
        originY: "center",
      });

      canvas.add(img);
      canvas.setActiveObject(img);
    });
  };

  reader.readAsDataURL(file);
  e.target.value = "";
});

document.getElementById("btn-undo").onclick = undo;
document.getElementById("btn-redo").onclick = redo;
document.getElementById("btn-clear").onclick = () => {
  if (confirm("Clear entire canvas?")) {
    canvas.clear();
    canvas.setBackgroundColor("#f0f0f0", canvas.renderAll.bind(canvas));
    saveHistory();
  }
};

// -------------------------------------------------------------------
// History System
// -------------------------------------------------------------------

function saveHistory() {
  if (isHistoryProcessing) return;
  if (historyRedo.length > 0) {
    historyRedo = [];
    updateUndoRedoUI();
  }
  const json = JSON.stringify(canvas.toJSON());
  history.push(json);
  if (history.length > MAX_HISTORY) history.shift();
  updateUndoRedoUI();
}

function loadHistory(json) {
  isHistoryProcessing = true;
  canvas.loadFromJSON(json, function () {
    canvas.renderAll();
    isHistoryProcessing = false;
  });
}

function undo() {
  if (history.length <= 1) return;
  const current = history.pop();
  historyRedo.push(current);
  const previous = history[history.length - 1];
  loadHistory(previous);
  updateUndoRedoUI();
}

function redo() {
  if (historyRedo.length === 0) return;
  const next = historyRedo.pop();
  history.push(next);
  loadHistory(next);
  updateUndoRedoUI();
}

function updateUndoRedoUI() {
  document.getElementById("btn-undo").disabled = history.length <= 1;
  document.getElementById("btn-redo").disabled = historyRedo.length === 0;
}

saveHistory();
canvas.on("object:added", saveHistory);
canvas.on("object:modified", saveHistory);
canvas.on("object:removed", saveHistory);
