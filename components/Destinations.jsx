import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { motion } from "framer-motion";

import { destinationsData } from "../data/destinationsData";

export default function Destinations() {
  return (
    <section
      id="destinations"
      className=" py-vert bg-section-main font-manrope"
    >
      <div
        data-aos="fade-up"
        className=" flex flex-col gap-[clamp(0.5rem,1.05vw,1rem)] text-center text-primary"
      >
        <h2 className="font-semibold text-[clamp(1rem,3.16vw,3rem)]">
          Top Destinations
        </h2>
        <p className="font-medium text-[clamp(0.63rem,1.32vw,1.25rem)]">
          Explore Ireland's most unforgettable locations
        </p>
      </div>

      <div
        data-aos="fade-up"
        className="mt-[clamp(1.75rem,3.68vw,3.5rem)] font-manrope text-white"
      >
        <Swiper
          effect={"coverflow"}
          grabCursor={false}
          centeredSlides={false}
          slidesPerView={3}
          loop={true}
          allowTouchMove={false}
          speed={2500}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          coverflowEffect={{
            rotate: 50,
            stretch: -60,
            depth: 200,
            modifier: 1,
            slideShadows: false,
          }}
          pagination={{
            dynamicBullets: true,
          }}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="mySwiper w-full"
        >
          {destinationsData.map((dest) => (
            <SwiperSlide className="relative w-full mb-20 rounded-2xl overflow-hidden group">
              <img
                src={dest.image}
                className="w-full h-[clamp(11rem,23.13vw,22rem)] object-cover rounded-2xl transform transition-transform duration-900 ease-out group-hover:scale-104"
              />
              <div className="absolute inset-0 bg-overlay/20 bg-gradient-to-t from-overlay/60 via-overlay/5 to-transparent"></div>

              <div className="absolute inset-0 flex flex-col gap-1 justify-end p-[clamp(0.5rem,1.05vw,1rem)] z-20">
                <h2 className="font-normal text-[clamp(0.94rem,1.97vw,1.88rem)] w-[clamp(6.25rem,13.14vw,12.5rem)]">
                  {dest.place}
                </h2>
                <p className="font-light text-[clamp(0.63rem,1.32vw,1.25rem)]">
                  {dest.tag}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
