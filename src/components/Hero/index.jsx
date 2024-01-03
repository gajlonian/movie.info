import { imageService } from "../../services/imageService";
import Banner from "../Banner";
import { useTrending } from "../../hooks/useTrending";
import AlertError from "../common/AlertError";
import Loading from "../common/Loading";

export default function Hero() {
    const { posts, isLoading, isError } = useTrending("trendingMovie", "movie");

    if (isLoading) {
        return <Loading height={"h-screen"} />;
    }
    if (isError) {
        return <AlertError />;
    }
    const post = posts?.slice(0, 1)[0];
    const bgImageUrl = imageService("original", post.backdrop_path);

    return (
        <div
            className={`absolute top-0 h-screen bg-no-repeat bg-center bg-cover h-screen w-full`}
            style={{ backgroundImage: `url(${bgImageUrl})` }}
        >
            <div className="h-full w-full bg-black bg-opacity-60">
                <div className="h-full w-full flex flex-col justify-start ">
                    <Banner data={post} />
                </div>
            </div>
        </div>
    );
}
