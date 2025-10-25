import "../styles/cta.css";

export default function Cta() {
  return (
    <section
      id="plan"
      className="px-hori py-vert bg-section-secondary font-manrope"
    >
      <div className="cta-flex bg-gradient-to-t from-gradienttwo to-primary flex w-full py-[clamp(0.88rem,1.84vw,1.75rem)] px-[clamp(1.75rem,3.68vw,3.5rem)] rounded-section items-center justify-between">
        <span className="w-[clamp(18.13rem,38.13vw,36.25rem)]">
          <h3 className="font-semibold text-[clamp(1.13rem,2.36vw,2.25rem)] text-white">
            Ready to Explore Ireland?
          </h3>
          <p className="font-medium text-[clamp(0.63rem,1.32vw,1.25rem)] text-white/90 mt-[clamp(0.25rem,0.53vw,0.5rem)]">
            Start your journey through Ireland and plan your next adventure
            today.
          </p>
        </span>
        <button className="font-semibold text-[clamp(0.75rem,1.58vw,1.5rem)] rounded-md-btn bg-transparent border-2 border-white text-white px-[clamp(0.88rem,1.84vw,1.75rem)] py-[clamp(0.5rem,1.05vw,1rem)] duration-300 ease-in-out hover:bg-white hover:text-black hover:cursor-pointer">
          Plan Your Trip
        </button>
      </div>
    </section>
  );
}
