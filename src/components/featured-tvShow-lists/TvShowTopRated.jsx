import { usePosts } from "../../hooks/usePosts";
import ContentList from "../content-list";

export default function TvShowTopRated() {
    const { posts, isError, isLoading, mediaType } = usePosts("tvShowTopRated", "tv", "top_rated");
    return <ContentList data={posts} isError={isError} isLoading={isLoading} mediaType={mediaType} />;
}
