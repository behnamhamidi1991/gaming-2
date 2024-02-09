import { productions } from "../../data";
import { useParams } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";

import "./singleproduction.css";
import Sidebar from "../../components/shared/Sidebar/Sidebar";
import Comments from "../../components/shared/Comments/Comments";

const SingleProduction = () => {
  const { id } = useParams();
  const newProduct = productions.find((item) => item.id === id);

  return (
    <div className="single-production-page">
      <div className="single-production-top"></div>
      <div className="single-production-content">
        <div className="single-production-left">
          {/* LEFT */}
          <div className="production-image-content">
            <img src={newProduct?.image} alt={newProduct?.title} />
            <div className="production-content-box">
              <h1>{newProduct?.title}</h1>
              <p>{newProduct?.text}</p>
              <div className="production-content-info-box">
                <span>Price: ${newProduct?.price}</span>
                <span>
                  {newProduct?.offer === true
                    ? "Off-price: " + newProduct?.offPrice
                    : null}
                </span>
                <span>
                  {newProduct?.offer === true
                    ? "Discount: " + newProduct?.percentage
                    : null}
                </span>
                <span>Rate: {newProduct?.rate}</span>
              </div>
              <button className="single-production-add-btn">
                <FaCartShopping />
                Add To Cart
              </button>
            </div>
          </div>
          <div className="single-production-comments">
            <Comments />
          </div>
        </div>
        <div className="single-production-right">
          <Sidebar />
        </div>
      </div>
      <div className="single-production-bottom"></div>
    </div>
  );
};

export default SingleProduction;
