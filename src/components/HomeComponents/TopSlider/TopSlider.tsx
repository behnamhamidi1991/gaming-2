import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { slides } from "../../../data";
import "./topslider.css";

const TopSlider = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className="top-slider">
            <div className="top-slider-image-container">
              <img src={slide.image} alt="" className="image-slide" />
            </div>
            <div className="top-slider-content">
              <h1>{slide.title}</h1>
              <h2>{slide.subtitle}</h2>
              <p>{slide.text.substring(1, 230)} ...</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default TopSlider;
