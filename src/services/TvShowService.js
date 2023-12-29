import { makeRequest } from "./utils/MakeRequest"

/**
 * 
 * @param {string} filter - such as popular, top_rated, on_the_air, airing_today
 * @param {string} language - language tag
 * @param {number} page 
 * @returns {string} - Endpoint url
 */

const endpointBuilder = (filter, language='en-US', page=1) => {
    return `tv/${filter}?language=${language}&page=${page}`
}

export const getTvShows = (filter, language, page) => {
    const endpoint = endpointBuilder(filter, language, page)
    return makeRequest(endpoint)
}
