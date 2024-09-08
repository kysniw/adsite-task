import { Swiper, SwiperSlide } from "swiper/react";
import { photosData } from "../libs/data";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Title from "./ui/Title";
import Link from "./ui/Link";
import Tooltip from "./ui/Tooltip";

const Gallery = () => {
  return (
    <section id="gallery" className="min-h-screen w-full pl-6 lg:pl-28 py-20">
      <div className="pr-6 lg:pr-28">
        <h2 className="text-primary text-xl font-roboto-condensed">
          Prezentacja firmy
        </h2>
        <Title className="text">Zobacz naszą galerię zdjęć</Title>
        <nav className="mt-10 flex gap-6">
          <Link active>Samochody osobowe</Link>
          <Link className="group relative" inactive>
            Samochody dostawcze
            <Tooltip>Dostępne wkrótce</Tooltip>
          </Link>
        </nav>
      </div>
      <Swiper
        modules={[Pagination, Autoplay]}
        slidesPerView={"auto"}
        autoplay={{
          delay: 7000,
        }}
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
