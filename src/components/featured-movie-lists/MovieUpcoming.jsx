import { usePosts } from "../../hooks/usePosts";
import ContentList from "../content-list";

export default function UpcomingMovie() {
    const { posts, isError, isLoading, isFetchingNextPage, fetchNextPage } = usePosts(
        "upcomingMovie",
        "movie",
        "upcoming"
    );
    console.log(posts);
    return (
        <ContentList
            data={posts}
            isError={isError}
            isLoading={isLoading}
            isFetchingNextPage={isFetchingNextPage}
            fetchNextPage={fetchNextPage}
        />
    );
}
