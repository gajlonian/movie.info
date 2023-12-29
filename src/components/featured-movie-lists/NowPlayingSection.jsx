import { useMovies } from "../../hooks/useMovies";
import ContentList from "../content-list";

export default function NowPlayingMovie() {
    const { posts, isError, isLoading, fetchNextPage, isFetchingNextPage } = useMovies(
        "nowPlayingMovie",
        "now_playing"
    );
    
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
