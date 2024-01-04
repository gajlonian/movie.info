import {  usePosts } from "../../hooks/usePosts";
import ContentList from "../content-list";

export default function NowPlayingMovie() {
    const { posts, isError, isLoading, mediaType } = usePosts(
        "nowPlayingMovie",
        'movie',
        "now_playing"
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
