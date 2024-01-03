import React from "react";
import { useParams } from "react-router-dom";
import { usePostDetail } from "../hooks/usePostDetail";
import { imageService } from "../services/imageService";
import { formatHour } from "../helpers/formatHour";
import Ratings from "../components/Ratings";
import LeftIcon from "../components/LeftIcon";

export default function PostDetail() {
    const { media_type, id } = useParams();
    const keyword = `${media_type.toString}-${id.toString()}`;
    const { data, isError, isLoading } = usePostDetail(keyword, media_type.toString(), id.toString());

    if (isLoading) {
        return <div>Loading...</div>;
    }
    // console.log(data);
    const bgImageUrl = imageService("original", data.backdrop_path);
    const poster = imageService("w500", data.poster_path);

    return (
        <div
            className={`h-screen w-full bg-no-repeat bg-center bg-cover text-white`}
            style={{ backgroundImage: `url(${bgImageUrl})` }}
        >
            <div className="w-full h-full bg-black bg-opacity-70">
                <div className="h-full w-full flex items-center mx-24">
                    <div className="absolute top-0 pt-8 opacity-80 hover:scale-105 hover:opacity-100">
                        <LeftIcon />
                    </div>
                    <Card imgUrl={poster} data={data} />
                </div>
            </div>
        </div>
    );
}

function Card({ data }) {
    const duration = formatHour(data.runtime);
    const genres = data.genres.map((genre) => genre.name).join(", ");

    return (
        <div className="flex flex-col w-2/4">
            <h1 className="text-3xl font-semibold">{data.title}</h1>
            <div className="opacity-80 text-sm flex gap-3 py-2">
                <p>{data.release_date}</p>
                <p>|</p>
                <p>{duration}</p>
            </div>
            <Ratings note={data.vote_average} />
            <p className="my-4 text-base">{data.overview}</p>
            <p>
                <span className="opacity-80 text-sm">Genres:</span> {genres}
            </p>
            <div className="mt-16 flex gap-4">
                <button className="font-sm h-10 w-36 border border-solid border-white rounded-full hover:bg-white hover:text-black hover:font-semibold">
                    Add to List
                </button>
                <button className="font-sm bg-red h-10 w-36 bg-red rounded-full hover:bg-opacity-70 hover:font-semibold">
                    Watch Trailer
                </button>
            </div>
        </div>
    );
}
