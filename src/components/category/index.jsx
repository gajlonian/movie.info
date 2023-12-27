import AlertError from "../AlertError";
import Loading from "../Loading";
import CategoryList from "./CategoryList";
import CategoryFooter from './CategoryFooter'

export default function Category({ data, isLoading, isError, isFetchingNextPage, fetchNextPage }) {
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
            <CategoryList data={data} />
            <CategoryFooter isFetchingNextPage={isFetchingNextPage} handleLoadMore={handleLoadMore} />
        </div>
    );
}
