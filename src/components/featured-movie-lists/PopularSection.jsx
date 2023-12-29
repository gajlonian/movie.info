import { useMovies } from "../../hooks/useMovies";
import ContentList from "../content-list";

export default function PopularMovie() {
    const { posts, isError, isLoading, fetchNextPage, isFetchingNextPage } = useMovies(
        "popularMovie",
        "popular"
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
