import { Swiper, SwiperSlide } from "swiper/react";
import { photosData } from "../libs/data";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Gallery = () => {
  return (
    <section id="gallery" className="min-h-screen w-full px-28">
      <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView={"auto"}
        navigation
        pagination={{ clickable: true }}
      >
        {photosData.map((photo) => {
          return (
            <SwiperSlide key={photo.id} className="max-w-fit py-20">
              <img
                src={photo.imageUrl}
                alt={photo.imageAlt}
                className="max-w-[400px]"
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Gallery;
