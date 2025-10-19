export default function Cta() {
  return (
    <section className="px-hori py-vert bg-section-secondary font-manrope">
      <div className="bg-primary flex w-full py-7 px-14 rounded-section items-center justify-between">
        <span className="w-[695px]">
          <h3 className="font-semibold text-4xl text-white">
            Ready to Explore Ireland?
          </h3>
          <p className="font-medium text-2xl text-white mt-2">
            Start your journey through Ireland and plan your next adventure
            today.
          </p>
        </span>
        <button className="font-medium text-2xl rounded-md-btn bg-white text-primary px-6 py-4">
          Plan Your Trip
        </button>
      </div>
    </section>
  );
}
