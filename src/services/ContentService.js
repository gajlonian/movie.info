import { EnpointBuilder } from "./utils/EndpointBuilder";
import { makeRequest } from "./utils/MakeRequest";

class ContentService {
    constructor() {
        this.makeRequest = makeRequest;
        this.defaultLanguage = "en-US";
        this.endpoints = new EnpointBuilder(this.defaultLanguage);
    }

    /**
     * @param {string} filter - For example: popular, upcoming, ...
     * @param {number} page
     * @param {string} language - The language code in format : 'en-US', 'fr-Fr', etc
     * @returns Promise<Object>
     */
    getContent(contentType, filter, page = 1, language = this.defaultLanguage) {
        const endpoint = this.endpoints.contentEndpoint(contentType, filter, page, language);
        return this.makeRequest(endpoint);
    }

    /**
     * @param {number} movieId
     * @param {string} language - The language code in format : 'en-US', 'fr-Fr', etc
     * @returns Promise<Object>
     */
    getMovieDetail(movieId, language = this.defaultLanguage) {
        const endpoint = this.endpoints.movieDetailEndpoint(movieId, language);
        return this.makeRequest(endpoint);
    }

    /**
     * @param {string} language - The language code in format : 'en-US', 'fr-Fr', etc
     * @returns Promise<Object>
     */
    getTrending(contentType, filter, language = this.defaultLanguage) {
        const endpoint = this.endpoints.trendingEndpoint(contentType, filter, language);
        return this.makeRequest(endpoint);
    }
}

export default ContentService;
