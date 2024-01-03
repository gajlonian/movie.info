import { EnpointBuilder } from "./utils/EndpointBuilder";
import { makeRequest } from "./utils/MakeRequest";

class ContentService {
    constructor() {
        this.makeRequest = makeRequest;
        this.defaultLanguage = "en-US";
        this.endpoints = new EnpointBuilder(this.defaultLanguage);
    }

    /**
     * @param {string} filter - such as popular, upcoming, ...
     * @param {number} page
     * @param {string} language - such as 'en-US', 'fr-Fr', etc
     * @returns Promise<Object>
     */
    getContent(mediaType, filter, page = 1, language = this.defaultLanguage) {
        const endpoint = this.endpoints.contentEndpoint(mediaType, filter, page, language);
        return this.makeRequest(endpoint);
    }

    /**
     * @param {number} movieId
     * @param {string} language - such as 'en-US', 'fr-Fr', etc
     * @returns Promise<Object>
     */
    getDetail(mediaType, postId, language = this.defaultLanguage) {
        const endpoint = this.endpoints.detailEndpoint(mediaType, postId, language);
        return this.makeRequest(endpoint);
    }

    /**
     * @param {string} language - such as 'en-US', 'fr-Fr', etc
     * @returns Promise<Object>
     */
    getTrending(mediaType, filter, language = this.defaultLanguage) {
        const endpoint = this.endpoints.trendingEndpoint(mediaType, filter, language);
        return this.makeRequest(endpoint);
    }
}

export default ContentService;
