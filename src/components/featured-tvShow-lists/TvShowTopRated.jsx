import { usePosts } from "../../hooks/usePosts";
import ContentList from "../content-list";

export default function TvShowTopRated() {
    const { posts, isError, isLoading } = usePosts("tvShowTopRated", "tv", "top_rated");
    return <ContentList data={posts} isError={isError} isLoading={isLoading} />;
}
