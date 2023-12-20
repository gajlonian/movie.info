/**
 * 
 * @param {string} format - original or w500
 * @param {string} imagePath 
 * @returns {string} - complete URL of image
 * @throws {Error}
 */
export function imageService (format='original', imagePath) {
    const baseURL = import.meta.env.VITE_IMAGE_BASE_URL
    if(!format || !imagePath) {
        throw new Error('Unable to load the image. Please check the function parameters.')
    }
    return `${baseURL}${format}/${imagePath}`
}