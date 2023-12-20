import { useQuery } from "react-query";
import MovieService from "../../services/MovieService";
import { imageService } from "../../services/imageService";
import Navbar from "../navbar";
import { StyledHero } from "../../styles/hero";
import Banner from "../Banner";


export default function Hero() {
    const movie = new MovieService();
    const { data, isLoading, isError } = useQuery({
        queryKey: ["posts"],
        queryFn: () => movie.getTrendingMovie(),
    });

    const post = data?.results.slice(0, 1)[0];

    if (isLoading) {
        return <div>loading...</div>;
    }
    // if (!isError) {
    //     console.log(post);
    // }

    return (
        <StyledHero
            className="absolute top-0 h-screen bg-no-repeat bg-center bg-cover"
            $bgImage={imageService("original", post.backdrop_path)}
        >
            <div className="h-screen w-full bg-black bg-opacity-60">
                <div className="h-full w-full flex flex-col justify-start ">
                    <Banner data={post} />
                </div>
            </div>
            
        </StyledHero>
    );
}
