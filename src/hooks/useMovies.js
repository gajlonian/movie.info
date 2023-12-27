import { useInfiniteQuery } from "react-query";
import MovieService from "../services/MovieService";

export function useMovies(key,filter) {
    let posts = []
    const movie = new MovieService
    const { data, isLoading, isError, fetchNextPage, isFetchingNextPage } = useInfiniteQuery({
        queryKey: [key, filter],
        queryFn: ({ pageParam=1 }) => movie.getMovies(filter, pageParam),
        getNextPageParam: (lastPage, allPages) => {
            return allPages.length + 1;
        },
    });
    if(!isLoading && !isError) {
        posts = data?.pages?.map((page) => page.results).flat();
    }
    return {
        posts,
        isLoading,
        fetchNextPage,
        isError,
        isFetchingNextPage
    };
}