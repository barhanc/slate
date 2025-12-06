export function splitByTransparency(fabricImage, canvas, fabric) {
  // 1. Get image data from a temporary canvas, without transformations
  const sourceCanvas = fabricImage.toCanvasElement({
    withoutTransform: true,
    withoutShadow: true,
  });
  const ctx = sourceCanvas.getContext("2d");
  const imageData = ctx.getImageData(
    0,
    0,
    sourceCanvas.width,
    sourceCanvas.height
  );
  const { width, height, data } = imageData;

  // 2. Find connected components (non-transparent pixels) using BFS
  const visited = new Uint8Array(width * height);
  const components = [];
  const MIN_PIXELS = 10; // Ignore tiny components

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const i = y * width + x;
      // If pixel is transparent or already visited, skip
      if (data[i * 4 + 3] === 0 || visited[i]) {
        continue;
      }

      // Found a new component, start BFS
      const componentPixels = [];
      const queue = [[x, y]];
      visited[i] = 1;
      let minX = x,
        minY = y,
        maxX = x,
        maxY = y;

      // Use a pointer for the queue to avoid slow shift() operations on large arrays
      let head = 0;
      while (head < queue.length) {
        const [px, py] = queue[head++];
        componentPixels.push([px, py]);

        minX = Math.min(minX, px);
        minY = Math.min(minY, py);
        maxX = Math.max(maxX, px);
        maxY = Math.max(maxY, py);

        // Check 8 neighbors
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

      if (componentPixels.length > MIN_PIXELS) {
        components.push({ pixels: componentPixels, minX, minY, maxX, maxY });
      }
    }
  }

  if (components.length <= 1) return null; // Nothing to split

  const newImages = [];

  const originalCenterPt = fabricImage.getCenterPoint();
  const angleRad = fabric.util.degreesToRadians(fabricImage.angle);
  const cos = Math.cos(angleRad);
  const sin = Math.sin(angleRad);

  // 3. Create a new fabric.Image for each component
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

    // 4. Position the new image relative to the original
    const delta = {
      x: comp.minX + compWidth / 2 - width / 2,
      y: comp.minY + compHeight / 2 - height / 2,
    };
    const scaled = {
      x: delta.x * fabricImage.scaleX,
      y: delta.y * fabricImage.scaleY,
    };
    const rotated = {
      x: scaled.x * cos - scaled.y * sin,
      y: scaled.x * sin + scaled.y * cos,
    };

    // Create image from canvas element directly, it's much faster than from dataURL
    const newImg = new fabric.Image(compCanvas, {
      left: originalCenterPt.x + rotated.x,
      top: originalCenterPt.y + rotated.y,
      angle: fabricImage.angle,
      scaleX: fabricImage.scaleX,
      scaleY: fabricImage.scaleY,
      originX: "center",
      originY: "center",
    });
    newImages.push(newImg);
  });

  return newImages;
}
