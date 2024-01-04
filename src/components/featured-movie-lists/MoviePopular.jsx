import {  usePosts } from "../../hooks/usePosts";
import ContentList from "../content-list";

export default function MoviePopular() {
    const { posts, isError, isLoading, mediaType } = usePosts(
        "popularMovie",
        'movie',
        "popular"
    );

    return (
        <ContentList
            data={posts}
            isError={isError}
            isLoading={isLoading}
            mediaType={mediaType}
        />
    );
}
