import HeroImg from "../images/hero.jpg";

export default function Hero() {
  return (
    <section className="relative w-full h-screen">
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

      <div className="relative z-10"></div>
    </section>
  );
}
