import Logo from "../icons/eirelogo.png";
import LogoBlack from "../icons/eirelogo2.png";
import Search from "../icons/search.png";
import SearchBlack from "../icons/search2.png";
import Account from "../icons/user.png";
import AccountBlack from "../icons/user2.png";

import { useEffect, useState } from "react";

export default function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [isStyled, setStyled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setIsVisible(y <= 8 || y >= 550);
      setStyled(y >= 550);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full px-hori py-[21px] flex items-center duration-400 ease-out justify-between 
        ${!isVisible ? "opacity-0 pointer-events-none" : "opacity-100"}
        ${
          isStyled
            ? "bg-white/60 rounded-[34px] backdrop-blur-md shadow-sm text-black"
            : "bg-transparent text-white"
        }`}
    >
      <div>
        <img
          src={isStyled ? LogoBlack : Logo}
          alt="Site Logo"
          className="w-[90px] h-[26px]"
        />
      </div>

      <div className="flex gap-[50px] font-manrope text-[20px] duration-400 font-light">
        <p>Home</p>
        <p>Destinations</p>
        <p>Experiences</p>
        <p>Guide</p>
        <p>Plan Trip</p>
      </div>

      <div className="flex gap-[50px]">
        <img
          src={isStyled ? SearchBlack : Search}
          alt="Search"
          className="w-6 h-6"
        />
        <img
          src={isStyled ? AccountBlack : Account}
          alt="Account"
          className="w-6 h-6 opacity-85"
        />
      </div>
    </header>
  );
}
