import Divider from "@mui/material/Divider";

import { navigateData } from "../data/navigateData";

import { useEffect } from "react";

import L from "leaflet";
import "leaflet/dist/leaflet.css";

export default function Navigate() {
  useEffect(() => {
    const map = L.map("map").setView([53.3498, -8.2603], 6.5);

    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution:
        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(map);

    return () => {
      map.remove();
    };
  }, []);

  return (
    <section className="px-hori py-vert bg-section-main font-manrope text-primary">
      <div className="flex gap-40">
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
          {navigateData.map((nav) => (
            <span className="flex items-center gap-3.5 mt-9">
              <img src={nav.icon} className="w-[32px] h-[32px]" />
              <p className="font-medium text-[18px] opacity-80">{nav.desc}</p>
            </span>
          ))}
        </div>
        <div
          id="map"
          className="w-full h-[580px] rounded-xl overflow-hidden"
        ></div>
      </div>
    </section>
  );
}
