import { useEffect, useState } from "react";

export  function useWindowHeight() {
  const [windowHeight, setWindowHeight] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      setWindowHeight(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return windowHeight;
}