import { useState } from "react";
import CategoryHeaderItem from "./CategoryHeaderItem";

export default function CategoryHeader({ setView }) {
    const [activeItem, setActiveItem] = useState("trending");
    const handleClick = (view) => {
        setActiveItem(view);
        setView(view);
    };

    return (
        <ul className="text-white flex gap-8 mx-24 py-6 border-solid border-b-2 border-red">
            <CategoryHeaderItem
                viewName={"trending"}
                onclick={handleClick}
                ItemText="Trending"
                activeItem={activeItem}
            />
            <CategoryHeaderItem
                viewName={"nowPlaying"}
                onclick={handleClick}
                ItemText="Now Playing"
                activeItem={activeItem}
            />
            <CategoryHeaderItem
                viewName={"popular"}
                onclick={handleClick}
                ItemText="Popular"
                activeItem={activeItem}
            />

            <CategoryHeaderItem
                viewName={"upcoming"}
                onclick={handleClick}
                ItemText="Upcoming"
                activeItem={activeItem}
            />
        </ul>
    );
}
