import { useQuery } from "react-query";
import ContentService from "../services/ContentService";

export const usePostDetail = (key, mediaType, postId) => {
    const service = new ContentService();
    const { data, isError, isLoading } = useQuery({
        queryKey: [key, mediaType, postId],
        queryFn: () => service.getDetail(mediaType, postId),
    });
    
    return { data, isLoading, isError };
};
