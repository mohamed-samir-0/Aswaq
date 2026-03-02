import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function HomeCarousel() {
  const slides = [
    { img: "/سويبر.png" },
    { img: "/سويبر2.png" }
  ];

  return (
    <div className="mt-[120px] md:mt-[150px] w-full px-4">
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        loop
        className="w-full max-w-[1100px] h-[180px] sm:h-[250px] md:h-[350px] lg:h-[450px] mx-auto"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <img
              src={slide.img}
              alt=""
              className="w-full h-full object-cover rounded-lg"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
