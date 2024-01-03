import React from "react";

export default function LeftIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
        >
            <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10 19l-7-7 7-7M3 12h17"
            />
        </svg>

        // <div className="absolute top-0 py-6">
        //     <div className="relative cursor-pointer hover:scale-105">
        //         <div className="absolute w-4 h-4 rotate-45 border-b-4 border-l-4 border-solid"></div>
        //         <div className="absolute top-1.5 h-1 w-6 bg-white"></div>
        //     </div>
        // </div>
    );
}
