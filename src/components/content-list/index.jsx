import AlertError from "../common/AlertError";
import Loading from "../common/Loading";
import ListItem from "./ListItem";

export default function ContentList({ data, isLoading, isError, isFetchingNextPage, fetchNextPage, mediaType }) {
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
        <div className="w-full py-6 md:px-24 px-8">
            <ListItem data={posts} mediaType={mediaType} />
        </div>
    );
}
