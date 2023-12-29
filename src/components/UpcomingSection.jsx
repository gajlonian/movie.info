import { useMovies } from "../hooks/useMovies";
import { useTvShow } from "../hooks/useTvShow";
import Category from "./category-movie";

export default function UpcomingMovie() {
    const { posts, isError, isLoading, isFetchingNextPage, fetchNextPage } = useMovies(
        "upcomingMovie",
        "upcoming"
    );

    const {posts: data} = useTvShow('popularList', 'popular')
    console.log(data);

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
