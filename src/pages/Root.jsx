import React from "react";
import Navbar from "../components/main-navbar";
import Hero from "../components/Hero";
import CatergoryRoot from "./CatergoryRoot";
import CategoryNavbar from "../components/category-navbar";

export default function Root() {
    return (
        <div className="relative flex flex-col bg-red">
            <Navbar />
            <Hero />
            <div className="pt-[calc(100vh-4rem)] bg-black">
                <CategoryNavbar />
                <CatergoryRoot />
            </div>
        </div>
    );
}
