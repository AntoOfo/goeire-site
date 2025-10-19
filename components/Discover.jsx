import { discoverData } from "../data/discoverData";
import Placeholder from "../images/dublin.crop.webp";
import Chevron from "../icons/chevron.png";

import Divider from "@mui/material/Divider";

export default function Discover() {
  return (
    <section className="px-hori py-vert bg-section-secondary font-manrope text-primary">
      <div>
        <h2 className="font-semibold text-5xl">What Will You Discover?</h2>

        <div className="mt-14">
          <div>
            <Divider />
            <div className="flex gap-7 items-center py-8">
              <img src={Placeholder} className="w-32 h-32 rounded-img" />
              <div className="flex w-full justify-between items-center">
                <div className="flex flex-col gap-0.5">
                  <span className="flex gap-5 items-baseline">
                    <h3 className="font-medium text-[28px]">Galway Music</h3>
                    <p className="font-medium text-[16px] opacity-60">
                      Culture • Galway
                    </p>
                  </span>
                  <p className="font-normal text-[20px]">
                    Experience live music and the energy that fills Galway's
                    pubs.
                  </p>
                </div>
                <img src={Chevron} className="w-4 h-4" />
              </div>
            </div>
            <Divider />
          </div>
        </div>
      </div>
    </section>
  );
}
