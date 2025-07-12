import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";

import Navbar from "../components/Navbar";
import ScrollText from "../components/ScrollText";

export default function MainLayout() {
  const [showScrollText, setShowScrollText] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setShowScrollText(false);
      } else if (currentScrollY < lastScrollY) {
        setShowScrollText(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <ScrollText />
      {/* <div className={`h-16 w-screen fixed flex flex-row top-0 z-40 ${!showScrollText ? "mt-8" : "mt-20"}`}>
        <Navbar/>
      </div> */}
      <div
        className="h-16 w-screen fixed flex flex-row top-0 z-40 transition-all duration-500"
        style={{ marginTop: showScrollText ? "5rem" : "2rem" }} // mt-20 ou mt-8
      >
        <Navbar />
      </div>

      <div className="w-screen z-10">
        <Outlet />
      </div>
    </>
  );
}
