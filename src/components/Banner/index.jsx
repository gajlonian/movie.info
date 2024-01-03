import Ratings from "../Ratings";

export default function Banner({ data }) {
    return (
        <div className="px-24 text-white flex-1 flex flex-col justify-center gap-4">
            <h1 className="text-5xl font-bold text-wrap w-2/5">{data.title}</h1>
            <Ratings note={data.vote_average} />
            <p className="w-2/5">{data.overview}</p>
        </div>
    );
}

