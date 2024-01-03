import { useQuery } from "react-query";
import ContentService from "../services/ContentService";

export const useTrending = (key, mediaType, filter = "day") => {
    const movie = new ContentService();
    const { data, isLoading, isError } = useQuery({
        queryKey: [key, mediaType, filter],
        queryFn: () => movie.getTrending(mediaType, filter),
    });

    const posts = data?.results;

    return { posts, isLoading, isError };
};
