import Linkedin from "../icons/linkedin_two.png";
import Github from "../icons/github.png";
import Mail from "../icons/mail.png";
import Logo from "../icons/eirelogo.png";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Footer() {
  return (
    <footer className="py-16 px-44 bg-footer text-white font-manrope">
      <div className="flex justify-between">
        <span className="flex flex-col gap-[20px] w-[280px]">
          <img src={Logo} className="w-[100px] opacity-60" />
          <span className="flex ml-1 gap-[14px]">
            <a href="https://www.linkedin.com/in/antonioofodile/">
              <img
                src={Linkedin}
                className="w-[24px] opacity-30 hover:cursor-pointer hover:opacity-80 duration-300"
              />
            </a>
            <a href="https://github.com/AntoOfo">
              <img
                src={Github}
                className="w-[24px] opacity-30 hover:cursor-pointer hover:opacity-80 duration-300"
              />
            </a>
            <a href="mailto:antonioofodileuk@gmail.com">
              <img
                src={Mail}
                className="w-[24px] opacity-30 hover:cursor-pointer hover:opacity-80 duration-300"
              />
            </a>
          </span>
        </span>

        <span className="flex flex-col gap-[18px] w-[280px]">
          <p className="font-normal text-[18px] opacity-60">CONTACT US</p>
          <p className="font-normal text-[18px] opacity-60">
            enquires@goeire.co
          </p>
          <p className="font-normal text-[18px] opacity-60">
            12 Smith Rd, Co. Dublin, Unit 12
          </p>
          <p className="font-normal text-[18px] opacity-60">+353 89 232 4508</p>
        </span>

        <span className="flex flex-col gap-[18px] w-[280px]">
          <p className="font-normal text-[18px] opacity-60">SUBSCRIBE</p>
          <p className="font-normal text-[18px] opacity-60">
            Enter your email to get notified about our latest news
          </p>
          <div className="flex gap-2 w-full items-center">
            <Input
              type="email"
              placeholder="Email"
              className="bg-white/7 border-transparent"
            />
            <Button
              type="submit"
              variant="outline"
              className="bg-white/7 border-1 border-white/50"
            >
              Subscribe
            </Button>
          </div>
        </span>
      </div>
    </footer>
  );
}
