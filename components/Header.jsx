import Logo from "../icons/eirelogo.png";
import Search from "../icons/search.png";
import Account from "../icons/user.png";

export default function Header() {
  return (
    <header className="px-hori flex bg-black font-manrope text-white font-light">
      <img src={Logo} alt="Site Logo" className="w-[90px] h-[26px]" />

      <p>Home</p>
      <p>Destinations</p>
      <p>Experiences</p>
      <p>Guide</p>
      <p>Plan Trip</p>

      <img src={Search} alt="Search" className="w-6 h-6" />
      <img src={Account} alt="Account" className="w-6 h-6 " />
    </header>
  );
}
