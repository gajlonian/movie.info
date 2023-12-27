import React from "react";

export default function CategoryHeaderItem({ onclick, viewName, ItemText, activeItem }) {
    const isActive = activeItem === viewName ? "text-red font-semibold" : ""
    return (
        <li
            onClick={() => onclick(viewName)}
            className={`cursor-pointer ${isActive}`}
        >
            {ItemText}
        </li>
    );
}
