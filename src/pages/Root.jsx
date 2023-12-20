import React from "react";
import Navbar from "../components/navbar";
import Hero from "../components/Hero";
import Category from "../components/category";

export default function Root() {
    
    return (
        <div className="flex flex-col">
            <Navbar />
            <Hero />
            <Category />
        </div>
    );
}
