import { statsData } from "../data/statsData";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export default function Stats() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section
      ref={ref}
      className="px-hori py-vert bg-section-secondary font-manrope text-primary"
    >
      <div className="flex justify-between">
        {statsData.map((stat) => (
          <div className="text-center">
            <h2 className="font-semibold text-5xl">
              {inView ? (
                <CountUp
                  start={0}
                  end={stat.value}
                  duration={3}
                  decimals={stat.decimals}
                />
              ) : (
                0
              )}
              {stat.end}
            </h2>
            <h3 className="font-light text-[32px]">{stat.label}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
