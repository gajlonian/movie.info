import React, { useState } from "react";
import FeaturedHeader from "../components/FeaturedHeader";
import FeaturedMovieSection from "../components/featured-movie-lists/FeaturedMovieSection";

export default function FeaturedMovies() {
    const [view, setView] = useState("trending"); 
    const [activeItem, setActiveItem] = useState("trending");

    const handleSetActive = (viewName) => {
        setActiveItem(viewName);
    };

    const handleSetView = (viewName) => {
        setView(viewName);
    };
    const items = [
        { viewName: "trending", itemText: "Trending" },
        { viewName: "nowPlaying", itemText: "Now Playing" },
        { viewName: "popular", itemText: "Popular" },
        { viewName: "upcoming", itemText: "Upcoming" },
    ];

    return <>
        <FeaturedHeader items={items} setView={handleSetView} setActive={handleSetActive} />
        <FeaturedMovieSection view={view} />
    </>;
}