import {useEffect, useState} from "react";

// keep synced with '--width-mobile' in App.css */
const mobileWidth = 750;

const useTouchDisplay = () => {
  try{
    document.createEvent('TouchEvent');
    return true;
  } catch {
    return false;
  }
}

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

    return useTouchDisplay() || (width <= mobileWidth);
}

const useDesktopDisplay = () => {
  return useMobileDisplay() === false;
}

export { useMobileDisplay, useDesktopDisplay, useTouchDisplay };
