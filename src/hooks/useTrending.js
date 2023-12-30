import { useQuery } from "react-query";
import ContentService from "../services/ContentService";

export const useTrending = (key, contentType, filter = "day") => {
    const movie = new ContentService();
    const { data, isLoading, isError } = useQuery({
        queryKey: [key, contentType, filter],
        queryFn: () => movie.getTrending(contentType, filter),
    });

    const posts = data?.results;

    return { posts, isLoading, isError };
};
