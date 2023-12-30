import { usePosts } from "../../hooks/usePosts";
import ContentList from "../content-list";

export default function TvShowAiringToday() {
    const { posts, isError, isLoading } = usePosts("tvShowAiringToday", "tv", "airing_today");
    return <ContentList data={posts} isError={isError} isLoading={isLoading} />;
}
