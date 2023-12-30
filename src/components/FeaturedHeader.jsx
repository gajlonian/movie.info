import { useState } from "react";

export default function FeaturedHeader({ items, setView, setActive, sectionName }) {
    const [activeItem, setActiveItem] = useState(items[0].viewName);

    const handleClick = (view) => {
        setActiveItem(view);
        setView(view);
        setActive && setActive(view);
    };

    return (
        <div className="mx-24  border-solid border-b-2 border-red flex flex-row items-center justify-between py-6">
            <ul className="text-white flex gap-8">
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
            <h1 className="text-white text-xl opacity-50">{sectionName}</h1>
        </div>
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
