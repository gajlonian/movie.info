import React from "react";
import { useParams } from "react-router-dom";
import { usePostDetail } from "../hooks/usePostDetail";
import { imageService } from "../services/imageService";
import Ratings from "../components/Ratings";

export default function PostDetail() {
    const { media_type, id } = useParams();
    const keyword = `${media_type.toString}-${id.toString()}`;
    const { data, isError, isLoading } = usePostDetail(keyword, media_type.toString(), id.toString());

    if (isLoading) {
        return <div>Loading...</div>;
    }
    console.log(data);
    const bgImageUrl = imageService("original", data.backdrop_path);
    const poster = imageService("w500", data.poster_path);

    return (
        <div
            className={`h-screen w-full bg-no-repeat bg-center bg-cover text-white`}
            style={{ backgroundImage: `url(${bgImageUrl})` }}
        >
            <div className="w-full h-full bg-black bg-opacity-60">
                {/* <div className=" w-full h-full flex items-center justify-center">
                    <div className="m-24 flex flex-row ">
                        <img src={poster} alt="poster" className="md:w-1/5 h-auto" />
                        <div className="flex flex-col gap-3">
                            <h1 className="font-semibold text-3xl">{data.title}</h1> 
                            <Genres genres={data.genres} />
                            <Ratings note={data.vote_average} />
                            <p className="w-3/5 font-sm">{data.overview}</p>
                        </div>
                    </div>
                </div> */}
                <div className="h-full w-full flex items-center mx-24">
                    <Card imgUrl={poster} data={data} />
                </div>
            </div>
        </div>
    );
}

function Genres({ genres }) {
    return (
        <ul className="flex gap-3 text-xs opacity-80">
            {genres.map((genre) => (
                <li
                    key={genre.id}
                    className="border-solid border-2 border-white border-opacity-50 px-3 py-2 rounded-full"
                >
                    {genre.name}
                </li>
            ))}
        </ul>
    );
}

function Card({ imgUrl, data }) {
    return (
        <div className="text-white h-3/5 flex flex-col gap-6 md:max-w-3xl md:flex-row">
            <img
                className="h-96 w-full object-cover md:h-auto"
                src={imgUrl}
                alt=""
            />
            <div className="flex flex-col gap-3 justify-start">
                <Genres genres={data.genres} />
                <h5 className="mb-2 text-xl font-medium">{data.title}</h5>
                <Ratings note={data.vote_average} />
                <p className="mb-4 text-base">{data.overview}</p>
                <p className="text-xs">Realese date: {data.release_date}</p>
            </div>
        </div>
    );
}
