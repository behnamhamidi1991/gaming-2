import "./battle.css";

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
        <div className="battle-container-top"></div>
        <div className="battle-container-info"></div>
        <div className="battle-container-users"></div>
        <div className="battle-container-btn"></div>
      </div>
    </div>
  );
};

export default Battle;
