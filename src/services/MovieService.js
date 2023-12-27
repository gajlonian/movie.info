import { EnpointBuilder } from "./utils/EndpointBuilder";
import { makeRequest } from "./utils/MakeRequest";

class MovieService {
    constructor() {
        this.makeRequest = makeRequest;
        this.defaultLanguage = 'en-US';
        this.endpoints = new EnpointBuilder(this.defaultLanguage);
    }

    /**
     * @param {string} filter - For example: popular, upcoming, ...
     * @param {number} page
     * @param {string} language - The language code in format : 'en-US', 'fr-Fr', etc
     * @returns Promise<Object>
     */
    getMovies(filter, page = 1, language = this.defaultLanguage) {
        const endpoint = this.endpoints.moviesEndpoint(filter, page, language);
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
    getTrendingMovie(filter, language = this.defaultLanguage) {
        const endpoint = this.endpoints.trendingMoviesEndpoint(filter,language);
        return this.makeRequest(endpoint);
    }
}

export default MovieService;
