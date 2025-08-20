// src/components/ScrollText.tsx
import { useEffect, useState } from "react";

const ScrollText = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setShow(false); 
      } else if (currentScrollY < lastScrollY) {
        setShow(true); 
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div
      className={`select-none z-40 fixed top-5 h-16 flex items-center gap-2 font-montserrat font-semibold text-sm md:text-base text-neutral-500 transition-all duration-500
    ${show ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5"}
    w-full md:w-auto md:ml-5
    justify-center md:justify-start
    px-4 md:px-0
  `}
    >
      <img src={`/logo.png`} alt="Logo" className="aspect-square h-9" />
      <span>Triton Drilling</span>
    </div>
  );
};

export default ScrollText;
