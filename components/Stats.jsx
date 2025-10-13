import { statsData } from "../data/statsData";

export default function Stats() {
  return (
    <section className="px-hori py-vert bg-section-secondary font-manrope">
      <div className="flex justify-between">
        {statsData.map((stat) => (
          <div className="text-center">
            <h2 className="font-semibold text-5xl">
              {stat.value}
              {stat.end}
            </h2>
            <h3 className="font-light text-[32px]">{stat.label}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
