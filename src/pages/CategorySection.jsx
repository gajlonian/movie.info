import React, { useState } from "react";
import CategoryContent from "../components/CategoryContent";
import CategoryMovieHeader from "../components/CategoryMovieHeader";

export default function CategorySection() {
    const [view, setView] = useState("trending");
    return (
        <div id="movies">
            <CategoryMovieHeader setView={setView} />
            <CategoryContent view={view} />
        </div>
    );
}
