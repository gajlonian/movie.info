export class EnpointBuilder {
    constructor(defaultLanguage = "en-US") {
        this.defaultLanguage = defaultLanguage;
    }

    contentEndpoint(contentType,filter, page = 1, language = this.defaultLanguage) {
        return `${contentType}/${filter}?language=${language}&page=${page}`;
    }

    movieDetailEndpoint(movieId, language = this.defaultLanguage) {
        return `movie/${movieId}?language=${language}`;
    }

    trendingEndpoint(contentType, filter, language = this.defaultLanguage) {
        return `trending/${contentType}/${filter}?language=${language}`;
    }
}
