import { useMovies } from "../hooks/useMovies";
import Category from "./category";

export default function UpcomingMovie() {
    const { posts, isError, isLoading, isFetchingNextPage, fetchNextPage } = useMovies(
        "upcomingMovie",
        "upcoming"
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
