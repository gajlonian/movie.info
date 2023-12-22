import Category from '../../../components/category'
import { useMovies } from '../../../hooks/useMovies';

export default function NowPlayingMovie() {
    const {posts, isError, isLoading} = useMovies('nowPlayingMovie','now_playing');
    const data = posts && posts.slice(0, 12)
    return <Category  data={data} isError={isError} isLoading={isLoading} />;
}
