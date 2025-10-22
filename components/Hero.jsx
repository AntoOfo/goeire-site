import HeroImg from "../images/hero.jpg";

import Typewriter from "typewriter-effect";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative w-full h-screen px-hori flex items-center"
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
        <p className="font-light text-[clamp(0.63rem,1.32vw,1.25rem)] mb-[clamp(0.63rem,1.32vw,1.25rem)]">
          Meet Ireland
        </p>
        <h1 className=" relative font-extrabold text-[clamp(2rem,4.21vw,4rem)] w-[clamp(23.25rem,48.88vw,46.5rem)] leading-tight m-0">
          <span className="invisible block">
            From Cliffs to Castles, Experience It All
          </span>

          <span className="absolute top-0 left-0 opacity-0 animate-fadeIn">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("From Cliffs to Castles, Experience It All")
                  .changeDelay(75)
                  .start();
              }}
              options={{
                delay: 40,
              }}
            />
          </span>
        </h1>
        <p className="font-light text-[clamp(0.63rem,1.32vw,1.25rem)] w-[clamp(18.94rem,39.85vw,37.88rem)] mt-[clamp(0.75rem,1.58vw,1.5rem)]">
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
