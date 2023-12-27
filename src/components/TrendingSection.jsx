import { useState } from "react";
import { useTrendingMovie } from "../hooks/useTrendingMovie";
import Category from "./category";
import Loading from "./Loading";
import AlertError from "./AlertError";

export default function TrendingMovie() {
    const [filter, setFilter] = useState("day");
    console.log(filter);

    const { posts, isError, isLoading } = useTrendingMovie(filter);

    if(isLoading) {
        <Loading />
    }
    if(isError) {
        <AlertError />
    }
    const data = posts && posts.slice(0, 12);
    return (
        <div>
            <Filter filter={filter} setFilter={setFilter} />
            <Category data={data} isError={isError} isLoading={isLoading} />
        </div>
    );
}

function Filter({ filter, setFilter }) {

    return (
        <ul className="text-white mx-24 pt-4 flex gap-8">
            <FilterItem buttonText={"Day"} filter={filter} setFilter={setFilter} />
            <FilterItem buttonText={"Week"} filter={filter} setFilter={setFilter} />
        </ul>
    );
}

function FilterItem({ buttonText, filter, setFilter }) {
    const handleClick = () => {
        setFilter(buttonText.toLowerCase())
    }
    const activeStyle = buttonText.toLowerCase() === filter ? "bg-red" : "bg-white bg-opacity-10";
    return <button onClick={handleClick} className={`py-2 px-8 rounded ${activeStyle}`}>{buttonText}</button>;
}
