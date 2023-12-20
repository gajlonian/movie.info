/**
 * @param {string} endpoint
 * @param {Object} customOptions
 * @returns Promise<Object>
 */

export async function makeRequest(endpoint, customOptions = {}) {
    const baseURL = import.meta.env.VITE_API_BASE_URL;
    const defaultOptions = {
        method: "GET",
        headers: {
            accept: "application/json",
            Authorization: import.meta.env.VITE_API_AUTH_TOKEN,
        },
    };

    try {
        const url = `${baseURL}${endpoint}`;
        const options = { ...defaultOptions, ...customOptions };
        const response = await fetch(url, options);

        if (!response.ok) {
            throw new Error("Erreur de la requête");
        }

        return response.json();
    } catch (error) {
        console.log(error);
    }
}
