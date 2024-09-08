import { Swiper, SwiperSlide } from "swiper/react";
import { photosData } from "../libs/data";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Title from "./ui/Title";
import Link from "./ui/Link";

const Gallery = () => {
  return (
    <section id="gallery" className="min-h-screen w-full pl-6 lg:pl-28 py-20">
      <div>
        <h2 className="text-primary text-xl font-roboto-condensed">
          Prezentacja firmy
        </h2>
        <Title className="text">Zobacz naszą galerię zdjęć</Title>
        <nav className="mt-10 flex gap-6">
          <Link active>Samochody osobowe</Link>
          <Link>Samochody dostawcze</Link>
        </nav>
      </div>
      <Swiper
        modules={[Pagination]}
        slidesPerView={"auto"}
        spaceBetween={50}
        pagination={{ clickable: true }}
        className="pr-6 lg:pr-28"
      >
        {photosData.map((photo) => {
          return (
            <SwiperSlide key={photo.id} className={`py-20 max-w-max`}>
              <img
                src={photo.imageUrl}
                alt={photo.imageAlt}
                className="h-auto"
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Gallery;
