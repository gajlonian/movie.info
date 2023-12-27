import { useMovies } from "../hooks/useMovies";
import Category from "./category";


export default function PopularMovie() {
    const { posts, isError, isLoading, fetchNextPage, isFetchingNextPage } = useMovies(
        "popularMovie",
        "popular"
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
