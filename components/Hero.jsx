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
        <p className="font-light text-[20px] mb-5">Meet Ireland</p>
        <h1 className=" relative font-extrabold text-[64px] w-[744px] leading-tight m-0">
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
        <p className="font-light text-[20px] w-[606px] mt-6">
          Plan your perfect escape, from rugged coastlines to charming villages,
          and make memories that last a lifetime.
        </p>
        <button className="mt-9 px-6 py-1.5 w-[179px] bg-transparent rounded-md-btn border-[1.5px] border-white font-normal text-[20px] duration-300 ease-in-out hover:bg-white hover:text-black hover:cursor-pointer">
          Explore Now
        </button>
      </div>
    </section>
  );
}

//
