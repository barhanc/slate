import { removeBackground as imglyRemoveBackground } from "@imgly/background-removal";

/**
 * Removes the background from a Fabric.js image object.
 *
 * @param {fabric.Image} fabricImage The Fabric.js image object.
 * @returns {Promise<Blob>} A Promise that resolves to a Blob of the image with the background removed.
 */
export async function removeBackground(fabricImage) {
  let src = fabricImage.getSrc();
  try {
    const blob = await imglyRemoveBackground(src);
    return blob;
  } catch (error) {
    console.error("Background removal failed:", error);
    throw error;
  }
}
