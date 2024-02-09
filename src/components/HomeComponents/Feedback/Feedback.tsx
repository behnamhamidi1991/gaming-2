import { users } from "../../../userData";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "./feedback.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
const Feedback = () => {
  return (
    <div className="feedback">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {users.map((user) => (
          <SwiperSlide key={user.id} className="user-feedback-box">
            <div className="user-image-container">
              <img src={user.profileImage} alt="profile-image" />
              <p className="user-name">{user.name}</p>
            </div>
            <div className="feedback-content">
              <p className="user-feedback">{user.feedback}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Feedback;
