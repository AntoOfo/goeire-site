import Arrow from "../icons/arrow.png";

import Masonry from "react-masonry-css";

import { discoverData } from "../data/discoverData";

export default function Discover() {
  const breakpointColumns = {
    default: 3,
    1100: 2,
    700: 1,
  };

  return (
    <section className="px-hori py-vert bg-section-secondary font-manrope text-primary">
      <div>
        <h2 className="font-semibold text-5xl">What Will You Discover?</h2>

        <Masonry
          breakpointCols={breakpointColumns}
          className="flex gap-16 mt-14"
          columnClassName="space-y-10"
        >
          {discoverData.map((disc, index) => (
            <div key={index} className="w-[415px] mb-14 break-inside-avoid">
              <div className="relative group rounded-img overflow-hidden">
                <img
                  src={disc.image}
                  className={`w-[415px] ${
                    index % 2 === 0 ? "h-[235px]" : "h-[327px]"
                  } rounded-img object-cover transform transition-transform duration-900 ease-out group-hover:scale-101`}
                />
                <div className="absolute inset-0 bg-overlay/15 bg-gradient-to-t from-overlay/30 via-overlay/5 to-transparent rounded-img"></div>
              </div>

              <h3 className="font-medium text-[28px] mt-4 mb-2">
                {disc.title}
              </h3>
              <p className="font-normal text-[20px] opacity-60 w-[415px] mb-5.5">
                {disc.desc}
              </p>
              <div className="flex justify-between">
                <span className="flex items-end gap-3">
                  <img src={disc.icon} className="w-[28px] h-[28px]" />
                  <p className="font-light text-[16px] opacity-60">
                    {disc.tag}
                  </p>
                </span>
                <button className="bg-primary rounded-sm-btn p-1">
                  <img src={Arrow} className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </Masonry>
      </div>
    </section>
  );
}
