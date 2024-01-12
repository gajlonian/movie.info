import { Suspense, lazy } from "react";
import { useParams } from "react-router-dom";
import { usePostDetail } from "../hooks/usePostDetail";
import { imageService } from "../services/imageService";
import { formatHour } from "../helpers/formatHour";

//components
import ActionButtons from "../components/ActionButtons";
import Ratings from "../components/Ratings";
import Loading from "../components/common/Loading";
import AlertError from "../components/common/AlertError";

export default function PostDetail() {
    const { media_type, id } = useParams();
    const keyword = `${media_type.toString}-${id.toString()}`;
    const { data, isError, isLoading } = usePostDetail(keyword, media_type.toString(), id.toString());

    if (isLoading) {
        return <Loading height={"h-screen"} bgColor={"bg-black"} />;
    }
    if (isError) {
        return <AlertError />;
    }
    // console.log(data);
    const bgImageUrl = imageService("original", data.backdrop_path);

    const LeftIcon = lazy(() => import("../components/ui/LeftIcon"));

    return (
        <div
            className={`h-screen w-full bg-no-repeat bg-center bg-cover text-white`}
            style={{ backgroundImage: `url(${bgImageUrl})` }}
        >
            <div className="w-full h-full bg-black bg-opacity-70">
                <div className="h-full w-full flex items-center mx-24">
                    <Suspense>
                        <div className="absolute top-0 pt-8 opacity-80 hover:scale-105 hover:opacity-100">
                            <LeftIcon />
                        </div>
                    </Suspense>
                    <div className="flex flex-col w-2/4">
                        <Title data={data} mediaType={media_type} />
                        {media_type === "movie" && (
                            <DurationAndDate date={data.release_date} runtime={data.runtime} />
                        )}
                        <Ratings note={data.vote_average} />
                        <Overview overview={data.overview} />
                        {media_type === "tv" && (
                            <SeasonsAndEpisodes
                                seasons={data.number_of_seasons}
                                episodes={data.number_of_episodes}
                                runtime={data.episode_run_time}
                            />
                        )}
                        <Genres genres={data.genres} />
                        <ActionButtons />
                    </div>
                </div>
            </div>
        </div>
    );
}

const Title = ({ data, mediaType }) => {
    const contentTitle = mediaType === "movie" ? data.title : data.name;
    return <h1 className="text-3xl font-semibold pb-3">{contentTitle}</h1>;
}

const Overview = ({ overview }) => {
    return (
        <div className="line-clamp-4 mb-3">
            <p className="my-4 text-sm">{overview}</p>
        </div>
    );
}

const Genres = ({ genres }) => {
    const genre = genres.map((genre) => genre.name).join(", ");
    return <ContentInfo name={"Genres"} info={genre} />;
}

const DurationAndDate = ({ date, runtime }) => {
    const duration = formatHour(runtime);
    return (
        <div className="opacity-80 text-sm flex gap-3 pb-3">
            <p>{date}</p>
            <p>|</p>
            <p>{duration}</p>
        </div>
    );
}

const SeasonsAndEpisodes = ({ seasons, episodes, runtime }) => {
    return (
        <div className="">
            <ContentInfo name={"Seasons"} info={seasons} />
            <ContentInfo name={"Episodes"} info={episodes} runtime={runtime} />
        </div>
    );
}

const ContentInfo = ({ info, name, runtime }) => {
    const runtimeView = name === "Episodes" && runtime > 0;
    return (
        <div className="text-md pb-1 flex gap-6">
            <p className="opacity-70 w-20">{name}</p>
            <div className="flex gap-8">
                <p className="font-semibold">{info}</p>
                {runtimeView && (
                    <p className="opacity-70">
                        duration: <span className="font-semibold">{runtime}m</span>
                    </p>
                )}
            </div>
        </div>
    );
}
