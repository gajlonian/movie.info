import React from "react";
import { useNavigate } from "react-router-dom";

export default function LeftIcon() {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate(-1)
    }
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            onClick={handleClick}
        >
            <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10 19l-7-7 7-7M3 12h17"
            />
        </svg>
    );
}
