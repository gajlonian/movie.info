import { usePosts } from "../../hooks/usePosts";
import ContentList from "../content-list";

export default function UpcomingMovie() {
    const { posts, isError, isLoading, mediaType } = usePosts("upcomingMovie", "movie", "upcoming");
    return <ContentList data={posts} isError={isError} isLoading={isLoading} mediaType={mediaType} />;
}
