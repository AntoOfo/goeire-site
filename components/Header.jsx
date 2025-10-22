import "../styles/header.css";

import Logo from "../icons/eirelogo.png";
import LogoBlack from "../icons/eirelogo2.png";
import Search from "../icons/search.png";
import SearchBlack from "../icons/search2.png";
import Account from "../icons/user.png";
import AccountBlack from "../icons/user2.png";

import { useEffect, useState } from "react";

import { Link } from "react-scroll";

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
      className={`fixed top-0 left-0 z-50 w-full px-hori py-[clamp(0.65rem,1.38vw,1.31rem)] flex items-center duration-400 ease-out justify-between 
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
          className="w-[clamp(2.81rem,5.92vw,5.63rem)] h-[clamp(0.81rem,1.71vw,1.63rem)]"
        />
      </div>

      <nav className="flex gap-[clamp(1.56rem,3.28vw,3.13rem)] font-manrope text-[clamp(0.63rem,1.32vw,1.25rem)] text-responsive duration-400 font-light">
        <Link
          to="home"
          smooth={true}
          duration={900}
          offset={-60}
          className="hover:cursor-pointer duration-200 hover:opacity-70"
        >
          Home
        </Link>
        <Link
          to="destinations"
          smooth={true}
          duration={900}
          offset={-50}
          className="hover:cursor-pointer duration-200 hover:opacity-70"
        >
          Destinations
        </Link>
        <Link
          to="experiences"
          smooth={true}
          duration={900}
          offset={-60}
          className="hover:cursor-pointer duration-200 hover:opacity-70"
        >
          Experiences
        </Link>
        <Link
          to="guide"
          smooth={true}
          duration={900}
          offset={-90}
          className="hover:cursor-pointer duration-200 hover:opacity-70"
        >
          Guide
        </Link>
        <Link
          to="plan"
          smooth={true}
          duration={900}
          className="hover:cursor-pointer duration-200 hover:opacity-70"
        >
          Plan Trip
        </Link>
      </nav>

      <div className="flex gap-[clamp(1.56rem,3.28vw,3.13rem)]">
        <img
          src={isStyled ? SearchBlack : Search}
          alt="Search"
          className="w-[clamp(0.75rem,1.58vw,1.5rem)] hover:cursor-pointer duration-200 hover:opacity-70"
        />
        <img
          src={isStyled ? AccountBlack : Account}
          alt="Account"
          className="w-[clamp(0.75rem,1.58vw,1.5rem)] opacity-85 hover:cursor-pointer duration-200 hover:opacity-55"
        />
      </div>
    </header>
  );
}
