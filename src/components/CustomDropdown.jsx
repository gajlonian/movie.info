import { useState } from "react";

export default function CustomDropdown({ items, view, setView}) {
    const [isOpen, setIsOpen] = useState(false);

    const handleItemClick = (item) => {
        setView(item);
        setIsOpen(false);
    };

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative w-1/4 lg:max-w-sm cursor-pointer">
            <div className="relative inline-block w-full">
                <div
                    onClick={toggleDropdown}
                    className="block w-full px-4 py-2.5 text-white font-semibold bg-red rounded-md cursor-pointer flex items-center justify-between"
                >
                    <span>{view.itemText}</span>
                    <div className="h-2 w-2 border-solid border-r-2 border-b-2 border-white rotate-45"></div>
                </div>

                {isOpen && <DropdownList items={items} handleItemClick={handleItemClick} />}
            </div>
        </div>
    );
}

function DropdownList({ items, handleItemClick }) {
    return (
        <div className="absolute mt-2 w-full bg-white rounded-md border border-gray-300">
            {items.map((item, index) => (
                <div
                    key={index}
                    onClick={() => handleItemClick(item)}
                    className="p-3 cursor-pointer hover:bg-gray-100"
                >
                    {item.itemText}
                </div>
            ))}
        </div>
    );
}
