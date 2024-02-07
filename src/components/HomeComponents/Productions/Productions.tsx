import "./productions.css";
import { productions } from "../../../data";

const Productions = () => {
  return (
    <div className="productions">
      <div className="header">
        <h2>Our Top Productions</h2>
        <p>These are the 8 top games our player buy every season</p>
      </div>

      <div className="prodictions-container">
        {productions.map((item) => (
          <div key={item.id} className="production">
            <div className="production-image-container">
              <img src={item.image} alt={item.title} />
            </div>
            <div className="production-content">
              <h3 className="production-content-title">{item.title}</h3>
              <p className="production-content-text">
                {item.text.substring(1, 190)} ...
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Productions;
