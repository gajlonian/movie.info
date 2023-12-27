import { useMovies } from "../hooks/useMovies";
import Category from "./category";

export default function NowPlayingMovie() {
    const { posts, isError, isLoading, fetchNextPage, isFetchingNextPage } = useMovies(
        "nowPlayingMovie",
        "now_playing"
    );
    
    return (
        <Category
            data={posts}
            isError={isError}
            isLoading={isLoading}
            isFetchingNextPage={isFetchingNextPage}
            fetchNextPage={fetchNextPage}
        />
    );
}
