import React, { useState } from "react";
import CategoryHeader from "../components/category-section-header";
import CategoryContent from "../components/CategoryContent";

export default function CategorySection() {
    const [view, setView] = useState("trending");
    return (
        <div id="movies">
            <CategoryHeader setView={setView} />
            <CategoryContent view={view} />
        </div>
    );
}
