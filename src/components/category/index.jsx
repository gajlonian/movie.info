import CategoryItem from "./category-item";

export default function Category({data, isLoading, isError, isFetchingNextPage, fetchNextPage}) {
    const handleLoadMore = () => {
        if(!isFetchingNextPage) {
            fetchNextPage()
        }
    }
    if (isLoading) {
        return <div>Loading</div>;
    }
    if (isError) {
        return <div>Something went wrong</div>;
    }

    return (
        <div className="w-full py-6 px-24">
            <ul className="py-6 grid grid-cols-6 gap-8">
                {data.map((item) => (
                    <CategoryItem key={item.id} item={item} />
                ))}
            </ul>
            {!isFetchingNextPage && <div className="text-red text-right" onClick={handleLoadMore}>More...</div>}
        </div>
    );
}

