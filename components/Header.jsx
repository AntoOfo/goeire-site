import Logo from "../icons/eirelogo.png";
import LogoBlack from "../icons/eirelogo2.png";
import Search from "../icons/search.png";
import Account from "../icons/user.png";

import { useEffect, useState } from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 z-20 w-full px-hori py-[21px] flex items-center duration-500 justify-between ${
        isScrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div>
        <img
          src={isScrolled ? LogoBlack : Logo}
          alt="Site Logo"
          className="w-[90px] h-[26px]"
        />
      </div>

      <div
        className={`flex gap-[50px] font-manrope text-[20px] duration-500 font-light ${
          isScrolled ? "text-black" : "text-white"
        }`}
      >
        <p>Home</p>
        <p>Destinations</p>
        <p>Experiences</p>
        <p>Guide</p>
        <p>Plan Trip</p>
      </div>

      <div className="flex gap-[50px]">
        <img src={Search} alt="Search" className="w-6 h-6" />
        <img src={Account} alt="Account" className="w-6 h-6 " />
      </div>
    </header>
  );
}
