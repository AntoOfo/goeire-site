import Divider from "@mui/material/Divider";

import Clover from "../icons/nature.png";

export default function Navigate() {
  return (
    <section className="px-hori py-vert bg-section-main font-manrope text-primary">
      <div className="flex">
        <div className="w-[600px]">
          <h2 className="font-semibold text-5xl mb-8">
            Navigate The Emerald Isle
          </h2>
          <p className="font-medium text-[18px] opacity-80 leading-[220%] mb-9">
            Ireland offers breathtaking scenery, deep history, and vibrant
            culture. From rugged coasts to charming towns, every stop holds
            something unforgettable. Use this guide to plan and explore its
            hidden gems.
          </p>
          <Divider className="w-[580px] font-medium text-[18px] text-primary/80">
            Quick Travel Tips
          </Divider>
          <span className="flex items-center gap-3.5 mt-9">
            <img src={Clover} className="w-[32px] h-[32px]" />
            <p className="font-medium text-[18px] opacity-80">
              Best time to visit: May to September for mild weather and long
              daylight hours
            </p>
          </span>
        </div>
      </div>
    </section>
  );
}
