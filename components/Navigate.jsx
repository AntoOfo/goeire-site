import Divider from "@mui/material/Divider";

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
      <div className="flex justify-between">
        <div className="w-[600px]">
          <h2 className="font-semibold text-5xl mb-4">
            Navigate The Emerald Isle
          </h2>
          <p className="font-medium text-[20px] mb-9">
            Explore Ireland's landscapes and hidden gems
          </p>
          <Divider className="w-[580px] font-medium text-[18px] text-primary/80">
            Travel Tips
          </Divider>
          {navigateData.map((nav) => (
            <span className="flex items-center gap-3.5 mt-9">
              <img src={nav.icon} className="w-[32px] h-[32px]" />
              <p className="font-medium text-[18px] opacity-80">{nav.desc}</p>
            </span>
          ))}
        </div>
        <div
          id="map"
          className="w-[634px] h-[440px] rounded-img z-10 overflow-hidden border-2 border-black/30"
        ></div>
      </div>
    </section>
  );
}
