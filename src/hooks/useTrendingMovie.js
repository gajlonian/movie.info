import { useQuery } from "react-query";
import MovieService from "../services/MovieService";

export const useTrendingMovie = (filter='day') => {
    let posts;
    const movie = new MovieService();
    const { data, isLoading, isError } = useQuery({
        queryKey: ["trendingMovie", filter],
        queryFn: () => movie.getTrendingMovie(filter),
    });
    
    if(!isLoading && !isError) {
        posts = data.results
    }

    return {posts, isLoading, isError};
};
