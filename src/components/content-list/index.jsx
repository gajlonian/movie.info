import AlertError from "../common/AlertError";
import Loading from "../common/Loading";
import CategoryFooter from './CategoryFooter'
import ListItem from "./ListItem";

export default function ContentList({ data, isLoading, isError, isFetchingNextPage, fetchNextPage }) {
    const posts = data?.slice(0,12)
    const handleLoadMore = () => {
        if (!isFetchingNextPage) {
            fetchNextPage();
        }
    };
    if (isLoading) {
        return <Loading height={"h-screen"} />;
    }
    if (isError) {
        return <AlertError />;
    }

    return (
        <div className="w-full py-6 px-24">
            <ListItem data={posts} />
            {/* <CategoryFooter isFetchingNextPage={isFetchingNextPage} handleLoadMore={handleLoadMore} /> */}
        </div>
    );
}
