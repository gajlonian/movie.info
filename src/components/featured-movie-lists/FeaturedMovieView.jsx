import { Suspense, lazy } from "react";
import Loading from "../common/Loading";

export default function FeaturedMovieView({ view }) {
    let Component;
    const MovieNowPlaying = lazy(() => import("./MovieNowPlaying"));
    const MoviePopular = lazy(() => import("./MoviePopular"));
    const MovieTrending = lazy(() => import("./MovieTrending"));
    const MovieUpcoming = lazy(() => import("./MovieUpcoming"));

    switch (view) {
        case "nowPlaying":
            Component = <MovieNowPlaying />;
            break;
        case "trending":
            Component = <MovieTrending />;
            break;
        case "upcoming":
            Component = <MovieUpcoming />;
            break;
        case "popular":
            Component = <MoviePopular />;
            break
        default:
            Component = null;
            break;
    }

    return <Suspense fallback={<Loading height={"h-screen"} />}>{Component && Component}</Suspense>;
}
