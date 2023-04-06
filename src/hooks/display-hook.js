import {useEffect, useState} from "react";

// keep synced with '--width-mobile' in App.css */
const mobileWidth = 750;

const useMobileDisplay = () => {
    const [width, setWidth] = useState(window.innerWidth);
    const handleWindowSizeChange = () => {
            setWidth(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);

    return (width <= mobileWidth);
}

const useDesktopDisplay = () => {
  return useMobileDisplay() === false;
}

export { useMobileDisplay, useDesktopDisplay };
