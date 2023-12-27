import React from "react";

export default function CategoryFooter({isFetchingNextPage, handleLoadMore}) {
    return (
        <>
            {!isFetchingNextPage && (
                <div className="text-red text-right flex justify-between">
                    <span className="cursor-pointer opacity-50 hover:opacity-100">
                        <a className="red" href="#movies">
                            Back to top
                        </a>
                    </span>
                    <span className="cursor-pointer opacity-50 hover:opacity-100" onClick={handleLoadMore}>
                        More...
                    </span>
                </div>
            )}
        </>
    );
}
