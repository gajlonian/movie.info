import React from "react";

import ContentList from "../content-list";
import { usePosts } from "../../hooks/usePosts";

export default function TvShowPopularSection() {
    const { posts, isError, isLoading } = usePosts("tvShowPopular", 'tv', "popular");

    return <ContentList data={posts} isError={isError} isLoading={isLoading} />;
}
