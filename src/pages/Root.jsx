import React from "react";
import Navbar from "../components/navbar";
import Hero from "../components/Hero";
import FeaturedMovies from "./FeaturedMovies";
import FeaturedTvShows from "./FeaturedTvShows";

export default function Root() {
    return (
        <div className="relative flex flex-col bg-black">
            <Navbar />
            <Hero />
            <div className="pt-[calc(100vh-4rem)] bg-black">
                <FeaturedMovies />
                <FeaturedTvShows />
            </div>
        </div>
    );
}
