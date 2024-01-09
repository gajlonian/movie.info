import FeaturedHeader from "../components/FeaturedHeader";
import FeaturedMovieView from "../components/featured-movie-lists/FeaturedMovieView";
import { useActiveView } from "../hooks/useActiveView";

export default function FeaturedMovies() {
    const { handleSetView, view } = useActiveView("movieView");
    
    const items = [
        { viewName: "trending", itemText: "Trending" },
        { viewName: "nowPlaying", itemText: "Now Playing" },
        { viewName: "popular", itemText: "Popular" },
        { viewName: "upcoming", itemText: "Upcoming" },
    ];

    return (
        <>
            <FeaturedHeader items={items} view={view} setView={handleSetView} sectionName={"Movies"} />
            <FeaturedMovieView view={view} />
        </>
    );
}
