import { users } from "../../../userData";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "./feedback.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { FaStar } from "react-icons/fa";

const Feedback = () => {
  return (
    <div className="feedback">
      <div className="feedback-header">
        <h2>Take a look at these feedbacks</h2>
        <p>
          If you are not familiar with us and our services, take a look at what
          our amazing users are saying about us.
        </p>
      </div>
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
            <div className="feedback-box">
              <div className="feedback-left">
                <div className="user-image-container">
                  <img src={user.profileImage} alt="profile-image" />
                  <div className="star-rating">
                    <FaStar className="star-icon" />
                    <FaStar className="star-icon" />
                    <FaStar className="star-icon" />
                    <FaStar className="star-icon" />
                    <FaStar className="star-icon" />
                  </div>
                  <p className="user-name">{user.name}</p>
                  <div className="feedback-content">
                    <p className="user-feedback">{user.feedback}</p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Feedback;
