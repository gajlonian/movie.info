import { useState } from "react";

export default function CategoryMovieHeader() {
    const [activeItem, setActiveItem] = useState("trending");
    const handleClick = (view) => {
        setActiveItem(view);
        setView(view);
    };

    return (
        <ul className="text-white flex gap-8 mx-24 py-6 border-solid border-b-2 border-red">
            <HeaderItem
                viewName={"trending"}
                onclick={handleClick}
                ItemText="Trending"
                activeItem={activeItem}
            />
            <HeaderItem
                viewName={"nowPlaying"}
                onclick={handleClick}
                ItemText="Now Playing"
                activeItem={activeItem}
            />
            <HeaderItem
                viewName={"popular"}
                onclick={handleClick}
                ItemText="Popular"
                activeItem={activeItem}
            />

            <HeaderItem
                viewName={"upcoming"}
                onclick={handleClick}
                ItemText="Upcoming"
                activeItem={activeItem}
            />
        </ul>
    );
}

function HeaderItem({ onclick, viewName, ItemText, activeItem }) {
    const isActive = activeItem === viewName ? "text-red font-semibold" : "";
    return (
        <li onClick={() => onclick(viewName)} className={`cursor-pointer ${isActive}`}>
            {ItemText}
        </li>
    );
}
