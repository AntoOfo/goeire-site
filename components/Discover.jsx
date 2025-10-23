import "../styles/discover.css";

import { discoverData } from "../data/discoverData";
import Placeholder from "../images/dublin.crop.webp";
import Chevron from "../icons/chevron.png";

import Divider from "@mui/material/Divider";

export default function Discover() {
  return (
    <section
      id="experiences"
      className="px-hori py-vert bg-section-secondary font-manrope text-primary"
    >
      <div>
        <h2
          data-aos="fade-right"
          className="font-semibold text-[clamp(1.5rem,3.16vw,3rem)] mb-[clamp(0.5rem,1.05vw,1rem)]"
        >
          What Will You Discover?
        </h2>
        <p
          data-aos="fade-right"
          className="ml-1 font-medium text-[clamp(0.63rem,1.32vw,1.25rem)]"
        >
          Curated experiences across Ireland's landscapes
        </p>

        <div
          data-aos="fade-right"
          className="mt-[clamp(1.75rem,3.68vw,3.5rem)]"
        >
          <div>
            <Divider className="opacity-40" />

            {discoverData.map((disc, index) => (
              <div className="group hover:cursor-pointer">
                <div className="flex gap-[clamp(0.88rem,1.84vw,1.75rem)] items-center py-[clamp(1rem,2.1vw,2rem)]">
                  <img
                    src={disc.image}
                    className="w-[clamp(4rem,8.41vw,8rem)] h-[clamp(4rem,8.41vw,8rem)] rounded-img object-cover"
                  />
                  <div className="flex w-full justify-between items-center">
                    <div className="flex flex-col gap-[clamp(0.06rem,0.13vw,0.13rem)]">
                      <span className="discover-col flex items-baseline">
                        <h3 className="font-medium text-[clamp(0.88rem,1.84vw,1.75rem)] duration-400 group-hover:text-[clamp(0.89rem,1.87vw,1.78rem)]">
                          {disc.title}
                        </h3>
                        <p className="font-normal text-[clamp(0.5rem,1.05vw,1rem)] opacity-60">
                          {disc.tag}
                        </p>
                      </span>
                      <p className="discover-width font-normal text-[clamp(0.63rem,1.32vw,1.25rem)] opacity-80">
                        {disc.desc}
                      </p>
                    </div>
                    <img
                      src={Chevron}
                      className="w-[clamp(0.5rem,1.05vw,1rem)] h-[clamp(0.5rem,1.05vw,1rem)] mr-[clamp(0.19rem,0.39vw,0.38rem)] opacity-50 duration-300 group-hover:opacity-100 group-hover:scale-110 group-hover:mr-0"
                    />
                  </div>
                </div>
                <Divider className="opacity-40" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
