import { useQuery } from "react-query";
import MovieService from "../services/MovieService";

export const useTrendingMovie = () => {
    let posts;
    const movie = new MovieService();
    const { data, isLoading, isError } = useQuery({
        queryKey: ["trendingMovie"],
        queryFn: () => movie.getTrendingMovie(),
    });
    
    if(!isLoading && !isError) {
        posts = data.results
    }

    return {posts, isLoading, isError};
};
