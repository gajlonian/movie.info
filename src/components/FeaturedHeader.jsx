import { useState } from "react";

export default function FeaturedHeader ({ items, setView, setActive }) {
    const [activeItem, setActiveItem] = useState(items[0].viewName);

    const handleClick = (view) => {
        setActiveItem(view);
        setView(view);
        setActive && setActive(view);
    };

    return (
        <ul className="text-white flex gap-8 mx-24 py-6 border-solid border-b-2 border-red">
            {items.map((item) => (
                <HeaderItem
                    key={item.viewName}
                    viewName={item.viewName}
                    onClick={handleClick}
                    itemText={item.itemText}
                    activeItem={activeItem}
                />
            ))}
        </ul>
    );
}

function HeaderItem({ onClick, viewName, itemText, activeItem }) {
    const isActive = activeItem === viewName ? "text-red font-semibold" : "";
    return (
        <li onClick={() => onClick(viewName)} className={`cursor-pointer ${isActive}`}>
            {itemText}
        </li>
    );
}
