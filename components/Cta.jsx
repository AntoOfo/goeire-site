export default function Cta() {
  return (
    <section
      id="plan"
      className="px-hori py-vert bg-section-secondary font-manrope"
    >
      <div className="bg-gradient-to-t from-gradienttwo to-primary flex w-full py-7 px-14 rounded-section items-center justify-between">
        <span className="w-[580px]">
          <h3 className="font-semibold text-4xl text-white">
            Ready to Explore Ireland?
          </h3>
          <p className="font-medium text-[20px] text-white/90 mt-2">
            Start your journey through Ireland and plan your next adventure
            today.
          </p>
        </span>
        <button className="font-semibold text-2xl rounded-md-btn bg-transparent border-2 border-white text-white px-7 py-4 duration-300 ease-in-out hover:bg-white hover:text-black hover:cursor-pointer">
          Plan Your Trip
        </button>
      </div>
    </section>
  );
}
