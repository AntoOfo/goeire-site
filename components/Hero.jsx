import HeroImg from "../images/hero.jpg";

export default function Hero() {
  return (
    <section className="relative w-full h-screen px-hori">
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

      <div className="relative z-10 text-white font-manrope">
        <p className="font-normal text-[20px]">Meet Ireland</p>
        <h1 className="font-extrabold text-[64px]">
          From Cliffs to Castles, Experience It All
        </h1>
        <p className="font-normal text-[20px]">
          Plan your perfect escape, from rugged coastlines to charming villages,
          and make memories that last a lifetime.
        </p>
        <button className="px-6 py-1 bg-transparent rounded-md-btn border-2 border-white font-normal text-[20px]">
          Explore Now
        </button>
      </div>
    </section>
  );
}
