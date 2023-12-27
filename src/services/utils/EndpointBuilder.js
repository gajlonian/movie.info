export class EnpointBuilder {
    constructor(defaultLanguage = 'en-US') {
        this.defaultLanguage = defaultLanguage
    }

    moviesEndpoint(filter, page=1, language=this.defaultLanguage) {
        return `movie/${filter}?language=${language}&page=${page}`
    }

    movieDetailEndpoint(movieId, language=this.defaultLanguage) {
        return `movie/${movieId}?language=${language}`
    }

    trendingMoviesEndpoint (filter, language=this.defaultLanguage) {
        return `trending/movie/${filter}?language=${language}`
    }
}