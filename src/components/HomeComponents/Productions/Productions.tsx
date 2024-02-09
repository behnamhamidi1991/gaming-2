import "./productions.css";
import { productions } from "../../../data";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";

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
            {/* PRICE BOX ABSOLUTE */}
            <div className="price-box">
              <span
                className={
                  item.offer === false
                    ? "price-box-price"
                    : "price-box-price price-line-through"
                }
              >
                $ {item.price}
              </span>
              <span
                className={
                  item.offer === true
                    ? "price-box-offPrice"
                    : "price-box-offPrice-none"
                }
              >
                {item.offer === true ? "$ " + item.offPrice : ""}
              </span>
              <span
                className={
                  item.offer === true
                    ? "price-box-percentage"
                    : "price-box-percentage-none"
                }
              >
                {item.percentage} OFF
              </span>
            </div>
            <div className="production-image-container">
              <img src={item.image} alt={item.title} />
            </div>
            <div className="production-content">
              <h3 className="production-content-title">{item.title}</h3>
              <p className="production-content-text">
                {item.text.substring(1, 190)} ...
              </p>
              <div className="btn-container">
                <button className="readmore-btn">
                  <FaCartShopping />
                  <span>Add To Cart</span>
                </button>
                <Link to={`/license/${item.id}`} className="readmore-btn">
                  <span>Read More</span>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Productions;
