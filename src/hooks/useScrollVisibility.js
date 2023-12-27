import { useEffect, useState } from "react";

export const useScrollVisibility = () => {
    const [visible, setVisible] = useState(true);
    const [isBehaviorTriggered, setIsBehaviorTriggered] = useState(false);
    
    useEffect(() => {
        let prevPositionScroll = window.pageYOffset;
        let scrollTimeout = null;

        const handleScroll = () => {
            const currentScrollPosition = window.pageYOffset;
            setVisible(prevPositionScroll > currentScrollPosition || currentScrollPosition < 50);
            setIsBehaviorTriggered(prevPositionScroll > 60);
            prevPositionScroll = currentScrollPosition;

            clearTimeout(scrollTimeout);
            if (currentScrollPosition !== 0) {
                scrollTimeout = setTimeout(() => {
                    setVisible(false);
                }, 2000);
            }
        };

        const resetScrollTimeout = () => {
            clearTimeout(scrollTimeout);
            const currentScrollPosition = window.pageYOffset;
            if (currentScrollPosition !== 0) {
                scrollTimeout = setTimeout(() => {
                    setVisible(false);
                }, 2000);
            }
        };

        window.addEventListener("scroll", handleScroll);
        window.addEventListener("mousewheel", resetScrollTimeout);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("mousewheel", resetScrollTimeout);
            clearTimeout(scrollTimeout);
        };
        
    }, []);

    return { visible, isBehaviorTriggered };
};
