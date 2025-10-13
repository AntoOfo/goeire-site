import Logo from "../icons/eirelogo.png";
import Search from "../icons/search.png";
import Account from "../icons/user.png";

export default function Header() {
  return (
    <header className="absolute top-0 left-0 z-20 w-full px-hori py-[21px] flex items-center justify-between">
      <div>
        <img src={Logo} alt="Site Logo" className="w-[90px] h-[26px]" />
      </div>

      <div className="flex gap-[50px] font-manrope text-[20px] text-white font-light">
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
