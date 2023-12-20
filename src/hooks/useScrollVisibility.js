import { useEffect, useState } from "react";

export const useScrollVisibility = () => {
    const [prevPositionScroll, setPrevPositionScroll] = useState(window.pageYOffset);
    const [visible, setVisible] = useState(true);
    const [scrollTimeout, setScrollTimeout] = useState(null);
    const [isBehaviorTriggered, setIsBehaviorTriggered] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPosition = window.pageYOffset;
            setVisible(prevPositionScroll > currentScrollPosition || currentScrollPosition < 50);
            setPrevPositionScroll(currentScrollPosition);
            setIsBehaviorTriggered(prevPositionScroll > 60);

            clearTimeout(scrollTimeout);

            if (currentScrollPosition !== 0) {
                setScrollTimeout(
                    setTimeout(() => {
                        setVisible(false);
                    }, 2000)
                );
            }
        };

        const resetScrollTimeout = () => {
            clearTimeout(scrollTimeout);
            if (currentScrollPosition !== 0) {
                setScrollTimeout(
                    setTimeout(() => {
                        setVisible(false);
                    }, 2000)
                );
            }
        };

        window.addEventListener("scroll", handleScroll);
        window.addEventListener("wheel", resetScrollTimeout);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("wheel", resetScrollTimeout);
            clearTimeout(scrollTimeout);
        };
    }, [prevPositionScroll, scrollTimeout]);

    return { visible, isBehaviorTriggered };
};
