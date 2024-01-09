import React, { Suspense, lazy } from "react";
import Loading from "../common/Loading";

export default function FeaturedTvShowView ({ view }) {
    let Component;
    const TvShowPopular = lazy(() => import("./TvShowPopular"));
    const TvShowTrending = lazy(() => import("./TvShowTrending"));
    const TvShowOnTheAir = lazy(() => import("./TvShowOnTheAir"));
    const TvShowAiringToday = lazy(() => import("./TvShowAiringToday"));
    const TvShowTopRated = lazy(() => import("./TvShowTopRated"));

    switch (view.viewName) {
        case "popular":
            Component = TvShowPopular;
            break;
        case "trending":
            Component = TvShowTrending;
            break;
        case "onTheAir":
            Component = TvShowOnTheAir;
            break;
        case "airingToday":
            Component = TvShowAiringToday;
        case "topRated":
            Component = TvShowTopRated;
            break;
        default:
            Component = null;
    }

    return <Suspense fallback={<Loading height={"h-screen"} />}>{Component && <Component />}</Suspense>;
}
