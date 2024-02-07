import "./battle.css";
import { users } from "../../../userData";

const Battle = () => {
  return (
    <div className="battle">
      <div className="header">
        <h2>Play Battle Of Armagedon Online</h2>
        <p>
          We&apos;re giving you a perfect 50% offer to play online in our
          high-speed powerful servers
        </p>
      </div>

      <div className="battle-container">
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
