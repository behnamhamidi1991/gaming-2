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
            <div className="feedback-box">
              <div className="feedback-left">
                <div className="user-image-container">
                  <img src={user.profileImage} alt="profile-image" />
                  <p className="user-name">{user.name}</p>
                  <div className="feedback-content">
                    <p className="user-feedback">{user.feedback}</p>
                  </div>
                </div>
              </div>
              <div className="feedback-right">
                <h3>User Info</h3>
                <p>Name: {user.name}</p>
                <p>Level: {user.level}</p>
                <p>Country: {user.country}</p>
                <p>City: {user.city}</p>
                <p>Awards: {user.awards}</p>
                <p>Followers {user.followers}</p>
                <p>Following {user.following}</p>
                <p>Status: {user.isOnline === true ? "Onlioe" : "Offline"}</p>
                <p>
                  Account: {user.isPremium === true ? "Premium" : "Regular"}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Feedback;
