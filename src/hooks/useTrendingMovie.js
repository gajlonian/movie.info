import { useQuery } from "react-query";
import MovieService from "../services/MovieService";

export const useTrendingMovie = (filter = "day") => {
    const movie = new MovieService();
    const { data, isLoading, isError } = useQuery({
        queryKey: ["trendingMovie", filter],
        queryFn: () => movie.getTrendingMovie(filter),
    });

    const posts = data?.results;

    return { posts, isLoading, isError };
};
