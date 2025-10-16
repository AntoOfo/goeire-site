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
          className="flex gap-6 mt-14"
          columnClassName="space-y-10"
        >
          {discoverData.map((disc, index) => (
            <div key={index} className="w-[435px] mb-10 break-inside-avoid">
              <img
                src={disc.image}
                className={`w-[435px] ${
                  index % 2 === 0 ? "h-[235px]" : "h-[327px]"
                } rounded-img mb-4 object-cover`}
              />
              <h3 className="font-medium text-[28px] mb-3.5">{disc.title}</h3>
              <p className="font-medium text-[20px] opacity-60 w-[435px] mb-6">
                {disc.desc}
              </p>
              <div className="flex justify-between">
                <span className="flex items-end gap-2.5">
                  <img src={disc.icon} className="w-[30px] h-[30px]" />
                  <p className="font-medium text-[16px] opacity-60">
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
