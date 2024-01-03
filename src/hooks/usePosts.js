import { useInfiniteQuery } from "react-query";
import ContentService from "../services/ContentService";

export function usePosts(key, mediaType, filter) {
    let posts = [];
    const movie = new ContentService();
    const { data, isLoading, isError, fetchNextPage, isFetchingNextPage } = useInfiniteQuery({
        queryKey: [key, mediaType, filter],
        queryFn: ({ pageParam = 1 }) => movie.getContent(mediaType, filter, pageParam),
        getNextPageParam: (lastPage, allPages) => {
            return allPages.length + 1;
        },
    });
    if (!isLoading && !isError) {
        posts = data?.pages?.map((page) => page.results).flat();
    }
    return {
        posts,
        isLoading,
        fetchNextPage,
        isError,
        isFetchingNextPage,
    };
}
