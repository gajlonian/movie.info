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

    trendingMoviesEndpoint (language=this.defaultLanguage) {
        return `trending/movie/day?language=${language}`
    }
}