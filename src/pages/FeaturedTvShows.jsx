import React, { useState } from "react";
import FeaturedHeader from "../components/FeaturedHeader";
import FeaturedTvShowView from '../components/featured-tvShow-lists/FeaturedTvShowView'

export default function FeaturedTvShows() {
    const [view, setView] = useState("trending");
    const [activeItem, setActiveItem] = useState('trending')
    return (
        <>
            <Header setView={setView} setActiveItem={setActiveItem} />
            <FeaturedTvShowView view={view} />
        </>
    );
}

function Header({setView,setActiveItem}) {
    
    const handleSetActive = (viewName) => {
        setActiveItem(viewName);
    };

    const handleSetView = (viewName) => {
        setView(viewName);
    };

    const items = [
        {viewName: 'trending', itemText: 'Trending'},
        {viewName: 'airingToday', itemText: 'Airing Today'},
        {viewName: 'onTheAir', itemText: 'On The Air'},
        {viewName: 'popular', itemText: 'Popular'},
        {viewName: 'topRated', itemText: 'Top Rated'},
        
    ]

    return <FeaturedHeader items={items} setActive={handleSetActive} setView={handleSetView} sectionName={'Tv Shows'} />
}
