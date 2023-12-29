import { imageService } from "../../services/imageService";
import { StyledHero } from "../../styles/hero";
import Banner from "../Banner";
import { useTrendingMovie } from "../../hooks/useTrendingMovie";
import AlertError from "../common/AlertError";
import Loading from "../common/Loading";

export default function Hero() {
    const { posts, isLoading, isError } = useTrendingMovie();

    if (isLoading) {
        return <Loading height={'h-screen'} />
    }
    if(isError) {
        return <AlertError />
    }
    const post = posts.slice(0, 1)[0];

    return (
        <StyledHero
            className="absolute top-0 h-screen bg-no-repeat bg-center bg-cover"
            $bgImage={imageService("original", post.backdrop_path)}
        >
            <div className="h-full w-full bg-black bg-opacity-60">
                <div className="h-full w-full flex flex-col justify-start ">
                    <Banner data={post} />
                </div>
            </div>
        </StyledHero>
    );
}
