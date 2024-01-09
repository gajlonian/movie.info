import FeaturedHeader from "../components/FeaturedHeader";
import FeaturedTvShowView from "../components/featured-tvShow-lists/FeaturedTvShowView";
import { useActiveView } from "../hooks/useActiveView";

export default function FeaturedTvShows() {
    const { handleSetView, view } = useActiveView("tvShovView");
    const items = [
        { viewName: "trending", itemText: "Trending" },
        { viewName: "airingToday", itemText: "Airing Today" },
        { viewName: "onTheAir", itemText: "On The Air" },
        { viewName: "popular", itemText: "Popular" },
        { viewName: "topRated", itemText: "Top Rated" },
    ];
    return (
        <>
            <FeaturedHeader
                items={items}
                view={view}
                setView={handleSetView}
                sectionName={"Tv Shows"}
            />
            <FeaturedTvShowView view={view} />
        </>
    );
}
