import { usePosts } from "../../hooks/usePosts";
import ContentList from "../content-list";

export default function TvShowOnTheAir() {
    const { posts, isError, isLoading } = usePosts("tvShowOnTheAir", "tv", "on_the_air");
    return <ContentList data={posts} isError={isError} isLoading={isLoading} />;
}
