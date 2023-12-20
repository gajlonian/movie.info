import { useInfiniteQuery } from "react-query";
import MovieService from "../services/MovieService";

export function useMovies(filter) {
    const movie = new MovieService
    const { data, isLoading, isError, fetchNextPage } = useInfiniteQuery({
        queryKey: ["posts", filter],
        queryFn: ({ pageParam }) => movie.getMovies(filter, pageParam),
        getNextPageParam: (lastPage, allPages) => {
            return allPages.length + 1;
        },
    });
    const posts = data?.pages?.map((page) => page.results).flat() || [];

    return {
        posts,
        isLoading,
        fetchNextPage,
        isError
    };
}