export class EnpointBuilder {
    constructor(defaultLanguage = "en-US") {
        this.defaultLanguage = defaultLanguage;
    }

    contentEndpoint(mediaType,filter, page = 1, language = this.defaultLanguage) {
        return `${mediaType}/${filter}?language=${language}&page=${page}`;
    }

    detailEndpoint(mediaType,contentId, language = this.defaultLanguage) {
        return `${mediaType}/${contentId}?language=${language}`;
    }

    trendingEndpoint(mediaType, filter, language = this.defaultLanguage) {
        return `trending/${mediaType}/${filter}?language=${language}`;
    }
}
