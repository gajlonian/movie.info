import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useScrollVisibility } from "../../hooks/useScrollVisibility";

export default function Navbar() {
    const { visible, isBehaviorTriggered } = useScrollVisibility();
    const isVisible = visible ? "" : "-translate-y-full transition-all delay-100";
    const bgColor = isBehaviorTriggered && visible ? "bg-black bg-opacity-70 border-none" : "";
    return (
        <nav
            className={`sticky top-0 z-50 w-full text-white border-solid border-b-2 border-white border-opacity-10 ${isVisible} ${bgColor}`}>
            <div className="px-24 flex items-center justify-between content-center">
                <div className="">Movie.Info</div>
                <ul className="flex items-center gap-14 h-full">
                    <NavLink className={({ isActive }) => (isActive ? "active" : "")} to={"/"}>
                        Home
                    </NavLink>
                    <NavLink className={({ isActive }) => (isActive ? "active" : "")} to={"/movies"}>
                        Movies
                    </NavLink>
                    <NavLink className={({ isActive }) => (isActive ? "active" : "")} to={"/tvShows"}>
                        Tv Shows
                    </NavLink>
                    <NavLink className={({ isActive }) => (isActive ? "active" : "")} to={"/myList"}>
                        My List
                    </NavLink>
                </ul>
            </div>
        </nav>
    );
}
