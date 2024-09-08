import { Swiper, SwiperSlide } from "swiper/react";
import { photosData } from "../libs/data";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Title from "./ui/Title";
import Link from "./ui/Link";

const Gallery = () => {
  return (
    <section id="gallery" className="min-h-screen w-full px-6 lg:px-28 py-20">
      <div className="">
        <h2 className="text-primary">Prezentacja firmy</h2>
        <Title className="text">Zobacz naszą galerię zdjęć</Title>
        <nav className="mt-10 flex gap-6">
          <Link active>Samochody osobowe</Link>
          <Link>Samochody dostawcze</Link>
        </nav>
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
