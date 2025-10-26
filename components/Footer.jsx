import Linkedin from "../icons/linkedin_two.png";
import Github from "../icons/github.png";
import Mail from "../icons/mail.png";
import Logo from "../icons/eirelogo.png";

import { useState } from "react";

export default function Footer() {
  const [isClicked, setIsClicked] = useState(false);

  function Button() {
    setIsClicked(true);

    setTimeout(() => {
      setIsClicked(false);
    }, 300);
  }

  return (
    <footer className="py-[clamp(2rem,4.21vw,4rem)] px-[clamp(5.5rem,11.57vw,11rem)] bg-footer text-white font-manrope">
      <div className="flex justify-between">
        <span className="flex flex-col gap-[clamp(0.63rem,1.32vw,1.25rem)] w-auto">
          <img
            src={Logo}
            className="w-[clamp(3.13rem,6.57vw,6.25rem)] opacity-60"
          />
          <span className="flex ml-[clamp(0.13rem,0.26vw,0.25rem)] gap-[clamp(0.44rem,0.92vw,0.88rem)]">
            <a href="https://www.linkedin.com/in/antonioofodile/">
              <img
                src={Linkedin}
                className="w-[clamp(0.75rem,1.58vw,1.5rem)] opacity-30 hover:cursor-pointer hover:opacity-80 duration-300"
              />
            </a>
            <a href="https://github.com/AntoOfo">
              <img
                src={Github}
                className="w-[clamp(0.75rem,1.58vw,1.5rem)] opacity-30 hover:cursor-pointer hover:opacity-80 duration-300"
              />
            </a>
            <a href="mailto:antonioofodileuk@gmail.com">
              <img
                src={Mail}
                className="w-[clamp(0.75rem,1.58vw,1.5rem)] opacity-30 hover:cursor-pointer hover:opacity-80 duration-300"
              />
            </a>
          </span>
        </span>

        <span className="flex flex-col gap-[clamp(0.56rem,1.18vw,1.13rem)] w-auto">
          <p className="font-normal text-[clamp(0.56rem,1.18vw,1.13rem)] opacity-60">
            CONTACT US
          </p>
          <p className="font-normal text-[clamp(0.56rem,1.18vw,1.13rem)] opacity-60">
            enquires@goeire.co
          </p>
          <p className="font-normal text-[clamp(0.56rem,1.18vw,1.13rem)] opacity-60">
            12 Smith Rd, Co. Dublin, Unit 12
          </p>
          <p className="font-normal text-[clamp(0.56rem,1.18vw,1.13rem)] opacity-60">
            +353 89 232 4508
          </p>
        </span>

        <span className="flex flex-col gap-[clamp(0.56rem,1.18vw,1.13rem)] w-[clamp(9rem,18.91vw,18rem)]">
          <p className="font-normal text-[clamp(0.56rem,1.18vw,1.13rem)] opacity-60">
            SUBSCRIBE
          </p>
          <p className="font-normal text-[clamp(0.56rem,1.18vw,1.13rem)] opacity-60">
            Enter your email to get notified about our latest news
          </p>
          <div className="flex gap-[clamp(0.25rem,0.53vw,0.5rem)]">
            <input
              type="text"
              id="email"
              placeholder="Email"
              className="rounded-sm-btn text-[clamp(0.47rem,0.99vw,0.94rem)] bg-primary/40 pl-[clamp(0.25rem,0.53vw,0.5rem)] w-[clamp(6rem,12.62vw,12rem)] focus:outline-white/50 focus:outline-1"
            />
            <input
              onClick={Button}
              type="button"
              value="Subscribe"
              className={`text-white/90 text-[clamp(0.47rem,0.99vw,0.94rem)] border-[1px] border-white/50 rounded-sm-btn px-[clamp(0.31rem,0.66vw,0.63rem)] py-[clamp(0.13rem,0.26vw,0.25rem)] bg-primary/40 hover:bg-primary/50 hover:cursor-pointer transition-all duration-150 ${
                isClicked ? "!bg-white/100 !text-black scale-95" : "scale-100"
              }`}
            />
          </div>
        </span>
      </div>
    </footer>
  );
}
