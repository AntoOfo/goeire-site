import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { destinationsData } from "../data/destinationsData";

export default function Destinations() {
  return (
    <section className="px-hori py-vert bg-section-main font-manrope">
      <div className=" flex flex-col gap-4 text-center text-primary">
        <h2 className="font-semibold text-5xl">Top Destinations</h2>
        <p className="font-medium text-[20px]">
          Explore Ireland's most unforgettable locations
        </p>
      </div>

      <div className="py-20">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={false}
          slidesPerView={3}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper w-full"
        >
          {destinationsData.map((dest) => (
            <SwiperSlide>
              <img
                src={dest.image}
                className="w-full h-full py-7 mb-10 object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
