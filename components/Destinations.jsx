import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
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

      <div className="mt-14 font-manrope text-white">
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
                className="w-full h-88 object-cover rounded-2xl transform transition-transform duration-900 ease-out group-hover:scale-104"
              />
              <div className="absolute inset-0 bg-overlay/20"></div>

              <div className="absolute inset-0 flex flex-col gap-1 justify-end p-4 z-20">
                <h2 className="font-normal text-3xl w-52">{dest.place}</h2>
                <p className="font-light text-[20px]">{dest.tag}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
