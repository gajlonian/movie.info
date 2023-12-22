import Category from '../../../components/category'
import { useCategory } from '../../../hooks/useCategory';


export default function UpcomingMovie() {
    const {posts, isError, isLoading} = useCategory('upcomingMovie','upcoming');
    const data = posts && posts.slice(0, 12)
    return <Category  data={data} isError={isError} isLoading={isLoading} />;
}
