import "./battle.css";
import { users } from "../../../userData";
import Timer from "../../shared/Timer/Timer";
import { useRef } from "react";
import { useInView } from "framer-motion";

const Battle = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div
      className="battle"
      ref={ref}
      style={{
        transform: isInView ? "none" : "translateX(-200px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
      }}
    >
      <div className="header">
        <h2>Play Battle Of Armagedon Online</h2>
        <p>
          We&apos;re giving you a perfect 50% offer to play online in our
          high-speed powerful servers
        </p>
        <div className="count-down-box-top">
          <Timer />
        </div>
      </div>

      <div className="battle-container">
        <div className="off-sign-wrapper">
          <div className="off-sign-display">
            <div className="off-sign-time">
              <div className="off-sign-text">
                <div className="off-sign-percentage">50%</div>
                Amazing Special Offer For Premium Users
              </div>
            </div>
          </div>
          <span></span>
        </div>
        <div className="count-down-box">
          <h3>Get Premium to play online with pros!</h3>
          <h4>The amazing offer will be accessible for</h4>

          <Timer />
        </div>
        <div className="battle-wrapper">
          <div className="battle-container-top">
            <h2>Battle Of Armagedon: Ultimate Action Online Game</h2>
            <p>
              Do you want to experience the legendary action game? All you have
              to do is a few clicks and you&apos;re in!
            </p>
          </div>
          <div className="battle-container-info">
            <span className="info-item">Price: $ 189</span>
            <span className="info-item">$ 94.50 </span>
            <span className="info-item">Number of Players: 893</span>
            <span className="info-item">Servers: 30</span>
          </div>
          <div className="genre">
            <span># action</span>
            <span># shooter</span>
            <span># team-game</span>
            <span># first-person</span>
            <span># world-war</span>
          </div>
          <div className="battle-container-users">
            {users.map((user) => (
              <div key={user.id} className="battle-container-users-image">
                <div className="user-status-wrapper">
                  <img
                    src={user.profileImage}
                    alt="user-profile"
                    className={
                      user.isOnline === true
                        ? "user-profile"
                        : "user-profile border-offline"
                    }
                  />
                  <span
                    className={
                      user.isOnline === true
                        ? "user-status"
                        : "user-status offline"
                    }
                  >
                    {user.isOnline === true ? "ONLINE" : "OFFLINE"}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="battle-container-btn"></div>
        </div>
      </div>
    </div>
  );
};

export default Battle;
