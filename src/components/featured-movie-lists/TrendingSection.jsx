import { useState } from "react";
import { useTrendingMovie } from "../../hooks/useTrendingMovie";
import Loading from "../common/Loading";
import AlertError from "../common/AlertError";
import ContentList from "../content-list";

export default function TrendingMovie() {
    const [filter, setFilter] = useState("day");
    const { posts, isError, isLoading } = useTrendingMovie(filter);

    if (isLoading) {
        return <Loading height={"h-screen"} />;
    }
    if (isError) {
        return <AlertError />;
    }

    return (
        <div>
            <Filter filter={filter} setFilter={setFilter} />
            <ContentList data={posts} isError={isError} isLoading={isLoading} />
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
        setFilter(buttonText.toLowerCase());
    };
    const activeStyle =
        buttonText.toLowerCase() === filter
            ? "bg-red font-semibold"
            : "bg-white bg-opacity-10 hover:bg-opacity-25";
    return (
        <button onClick={handleClick} className={`py-2 px-8 rounded ${activeStyle}`}>
            {buttonText}
        </button>
    );
}
