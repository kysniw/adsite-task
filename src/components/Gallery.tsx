import { Swiper, SwiperSlide } from "swiper/react";
import { photosData } from "../libs/data";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Title from "./ui/Title";

const Gallery = () => {
  return (
    <section id="gallery" className="min-h-screen w-full px-6 lg:px-28">
      <div>
        <Title className="text-xl">Zobacz naszą galerię zdjęć</Title>
      </div>
      <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView={"auto"}
        spaceBetween={64}
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
