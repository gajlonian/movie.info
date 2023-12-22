import { useTrendingMovie } from "../../../hooks/useTrendingMovie";
import Category from '../../../components/category'

export default function TrendingMovie() {
    const {posts, isError, isLoading} = useTrendingMovie();
    const data = posts && posts.slice(0, 12)
    return <Category data={data} isError={isError} isLoading={isLoading} />;
}
