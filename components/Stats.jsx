import { statsData } from "../data/statsData";
import CountUp from "react-countup";

export default function Stats() {
  return (
    <section className="px-hori py-vert bg-section-secondary font-manrope text-primary">
      <div className="flex justify-between">
        {statsData.map((stat) => (
          <div className="text-center">
            <h2 className="font-semibold text-5xl">
              <CountUp
                start={0}
                end={stat.value}
                duration={3}
                decimals={stat.decimals}
              />
              {stat.end}
            </h2>
            <h3 className="font-light text-[32px]">{stat.label}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
