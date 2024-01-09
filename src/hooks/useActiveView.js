import { useEffect, useState } from "react";

export const useActiveView = (keyStorage) => {
    const getInitView = () => {
        let defautView = {viewName:'trending', itemText:'Trending'}
        const savedView = sessionStorage.getItem(keyStorage);
        return savedView ? JSON.parse(savedView) : defautView;
    };
    const [view, setView] = useState(getInitView());

    const handleSetView = (newView) => {
        setView(newView);
    };

    useEffect(() => {
        sessionStorage.setItem(keyStorage, JSON.stringify(view));
    }, [keyStorage, view]);

    console.log(view);

    return {
        handleSetView,
        view,
    };
};
