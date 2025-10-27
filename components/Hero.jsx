import "../styles/hero.css";

import HeroImg from "../images/hero.jpg";
import TypeIt from "typeit-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="hero bg-responsive relative w-full px-hori flex items-center"
    >
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-overlay/30 bg-blend-overlay"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0,0,0,0.34) 34%, rgba(0,0,0,0) 100%),
            url(${HeroImg})`,
          backgroundSize: "cover",
          backgroundPosition: "50% 85%",
        }}
      ></div>

      <div className="relative z-10 flex flex-col text-white font-manrope">
        <p className="preheading font-light text-[clamp(0.9rem,1.32vw,1.25rem)] mb-[clamp(0.63rem,1.32vw,1.25rem)]">
          Meet Ireland
        </p>
        <h1 className="heading relative font-extrabold text-[clamp(2.5rem,4.21vw,4rem)] w-[clamp(16.25rem,45.6vw,43.44rem)] leading-tight m-0">
          <span className="invisible block">
            From Cliffs to Castles, Experience It All
          </span>

          <span className="absolute top-0 left-0 opacity-0 animate-fadeIn">
            <TypeIt
              options={{
                strings: ["From Cliffs to Castles, Experience It All "],
                speed: 35,
                cursorChar: "|",
                waitUntilVisible: true,
              }}
            />
          </span>
        </h1>
        <p className="subheading font-light text-[clamp(0.9rem,1.32vw,1.25rem)] w-[clamp(26rem,39.85vw,37.88rem)] mt-[clamp(0.75rem,1.58vw,1.5rem)]">
          Plan your perfect escape, from rugged coastlines to charming villages,
          and make memories that last a lifetime.
        </p>
        <button className="mt-[clamp(1.13rem,2.36vw,2.25rem)] px-clamp(0.75rem,1.58vw,1.5rem) py-[clamp(0.19rem,0.39vw,0.38rem)] w-[clamp(5.59rem,11.76vw,11.19rem)] bg-transparent rounded-md-btn border-[1.5px] border-white font-normal text-[clamp(0.63rem,1.32vw,1.25rem)] duration-300 ease-in-out hover:bg-white hover:text-black hover:cursor-pointer">
          Explore Now
        </button>
      </div>
    </section>
  );
}

//
