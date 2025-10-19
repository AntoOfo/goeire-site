import { discoverData } from "../data/discoverData";
import Placeholder from "../images/dublin.crop.webp";
import Chevron from "../icons/chevron.png";

import Divider from "@mui/material/Divider";

export default function Discover() {
  return (
    <section className="px-hori py-vert bg-section-secondary font-manrope text-primary">
      <div>
        <h2 className="font-semibold text-5xl">What Will You Discover?</h2>

        <div>
          <div className="flex">
            <img src={Placeholder} className="w-24 h-24" />
            <div className="flex justify-between">
              <div>
                <span className="flex">
                  <h3 className="font-medium text-[28px]">Galway Music</h3>
                  <p className="font-medium text-[16px] opacity-60">
                    Culture • Galway
                  </p>
                </span>
                <p className="font-normal text-[20px]">
                  Experience live music and the energy that fills Galway's pubs.
                </p>
              </div>
              <img src={Chevron} className="w-4 h-4" />
            </div>
          </div>
          <Divider />
        </div>
      </div>
    </section>
  );
}
