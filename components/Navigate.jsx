import "../styles/navigate.css";

import Divider from "@mui/material/Divider";
import Pin from "../icons/pin.png";

import { navigateData } from "../data/navigateData";
import { locationsData } from "../data/locationsData";

import { useEffect } from "react";

import L from "leaflet";
import "leaflet/dist/leaflet.css";

export default function Navigate() {
  useEffect(() => {
    const map = L.map("map").setView([53.3498, -8.2603], 6.4);

    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
    }).addTo(map);

    locationsData.map((loc) => {
      L.marker(loc.coords)
        .addTo(map)
        .bindPopup(`<b>${loc.name}</b><br />${loc.desc}`);
    });

    return () => {
      map.remove();
    };
  }, []);

  return (
    <section
      id="guide"
      className="px-hori py-vert bg-section-main font-manrope text-primary"
    >
      <div className="flex flex-mobile justify-between">
        <div className="wrapper w-[clamp(18.75rem,39.43vw,37.5rem)]">
          {/* HEADER DIV !!!*/}
          <div className="header">
            <h2 className="font-semibold text-[clamp(1.5rem,3.16vw,3rem)] mb-[clamp(0.5rem,1.05vw,1rem)]">
              Navigate The Emerald Isle
            </h2>
            <p className="font-medium text-[clamp(0.63rem,1.32vw,1.25rem)] mb-[clamp(1.13rem,2.36vw,2.25rem)]">
              Explore Ireland's landscapes and hidden gems
            </p>
          </div>

          <Divider className="w-[clamp(18.13rem,38.13vw,36.25rem)]" />

          {/* TRAVEL DIV !!!*/}
          <div className="travel flex items-center gap-[clamp(0.44rem,0.92vw,0.88rem)] mb-[clamp(1.13rem,2.36vw,2.25rem)] mt-[clamp(1.13rem,2.36vw,2.25rem)]">
            <img
              src={Pin}
              className="w-[clamp(0.81rem,1.71vw,1.63rem)] h-[clamp(0.81rem,1.71vw,1.63rem)]"
            />
            <p className=" font-medium text-[clamp(0.63rem,1.32vw,1.25rem)] text-primary/80">
              Travel Tips
            </p>
          </div>

          {/* TIPS DIV !!!*/}
          <div className="tips">
            {navigateData.map((nav) => (
              <div className="flex items-center gap-[clamp(0.44rem,0.92vw,0.88rem)] mt-[clamp(0.88rem,1.84vw,1.75rem)] bg-white border-1 border-primary/30 rounded-img px-[clamp(0.5rem,1.05vw,1rem)] py-[clamp(0.38rem,0.79vw,0.75rem)]">
                <img
                  src={nav.icon}
                  className="w-[clamp(1rem,2.1vw,2rem)] h-[clamp(1rem,2.1vw,2rem)]"
                />
                <p className="font-medium text-[clamp(0.56rem,1.18vw,1.13rem)] opacity-80">
                  {nav.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* MAP DIV !!!*/}
        <div
          id="map"
          className="w-[clamp(19.81rem,41.68vw,39.63rem)] h-[clamp(17.34rem,36.47vw,34.69rem)] rounded-img z-10 overflow-hidden border-1 border-black/30"
        ></div>
      </div>
    </section>
  );
}
