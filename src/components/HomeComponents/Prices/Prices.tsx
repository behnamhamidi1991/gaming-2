import "./prices.css";
import { prices } from "../../../data";
import { BiCheck } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";
import { FaCartShopping } from "react-icons/fa6";
import { useRef } from "react";
import { useInView } from "framer-motion";

const Prices = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div
      className="price-section"
      ref={ref}
      style={{
        transform: isInView ? "none" : "translateX(-200px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
      }}
    >
      <div className="price-header">
        <h2>Upgrade your account</h2>
        <p>Upgrade your account to use our servers and streaming services</p>
      </div>

      <div className="price-container">
        {prices.map((cart) => (
          <div key={cart.id} className="pricecard">
            <div className="pricecard-content">
              <span className="borderline"></span>
              <h3>{cart.title}</h3>
              <div className="pricebox">
                <span>Price: {cart.price}</span>
                {cart.offer === true ? (
                  <span>Off-price: {cart.offPrice}</span>
                ) : null}
              </div>
              <div className="streaming-bool">
                <span>Streaming:</span>
                <span>
                  {cart.streaming === true ? (
                    <BiCheck className="true-icon" />
                  ) : (
                    <RxCross2 className="false-icon" />
                  )}
                </span>
              </div>
              <div className="forum-bool">
                <span>Forum:</span>
                <span>
                  {cart.forum === true ? (
                    <BiCheck className="true-icon" />
                  ) : (
                    <RxCross2 className="false-icon" />
                  )}
                </span>
              </div>
              <div className="vip-group-bool">
                <span>VIP Group:</span>
                <span>
                  {cart.vipGroup === true ? (
                    <BiCheck className="true-icon" />
                  ) : (
                    <RxCross2 className="false-icon" />
                  )}
                </span>
              </div>
              <div className="server-bool">
                <span>Game Servers:</span>
                <span>
                  {cart.creatingServers === true ? (
                    <BiCheck className="true-icon" />
                  ) : (
                    <RxCross2 className="false-icon" />
                  )}
                </span>
              </div>
              <div className="num-servers">
                <span>Servers: </span>
                <span>
                  {cart.creatingServers === true ? cart.numServers : "0"}
                </span>
              </div>
              <div className="support-bool">
                <span>Game Servers:</span>
                <span>
                  {cart.support === true ? (
                    <BiCheck className="true-icon" />
                  ) : (
                    <RxCross2 className="false-icon" />
                  )}
                </span>
              </div>
              <div className="vip-cart-bool">
                <span>VIP Cart:</span>
                <span>
                  {cart.vipCart === true ? (
                    <BiCheck className="true-icon" />
                  ) : (
                    <RxCross2 className="false-icon" />
                  )}
                </span>
              </div>
              {/* CLASS CHECK */}
              <div className="vip-cart-bool">
                <span>Free Delivery:</span>
                <span>
                  {cart.freedelivery === true ? (
                    <BiCheck className="true-icon" />
                  ) : (
                    <RxCross2 className="false-icon" />
                  )}
                </span>
              </div>
              <div className="vip-cart-bool">
                <span>Meetings:</span>
                <span>
                  {cart.meetings === true ? (
                    <BiCheck className="true-icon" />
                  ) : (
                    <RxCross2 className="false-icon" />
                  )}
                </span>
              </div>
              <div className="vip-cart-bool">
                <span>Game-Center:</span>
                <span>
                  {cart.gamecenter === true ? (
                    <BiCheck className="true-icon" />
                  ) : (
                    <RxCross2 className="false-icon" />
                  )}
                </span>
              </div>
              <div className="vip-cart-bool">
                <span>Production Discount:</span>
                <span>
                  {cart.discountPro === true ? (
                    <BiCheck className="true-icon" />
                  ) : (
                    <RxCross2 className="false-icon" />
                  )}
                </span>
              </div>
              <div className="vip-cart-bool">
                <span>VPS:</span>
                <span>
                  {cart.vps === true ? (
                    <BiCheck className="true-icon" />
                  ) : (
                    <RxCross2 className="false-icon" />
                  )}
                </span>
              </div>
              <div className="vip-cart-bool">
                <span>Free Account:</span>
                <span>
                  {cart.freeaccount === true ? (
                    <BiCheck className="true-icon" />
                  ) : (
                    <RxCross2 className="false-icon" />
                  )}
                </span>
              </div>
              <button className="price-add-to-cart-btn">
                <FaCartShopping className="faCartIcon" />
                <span>Add To Cart</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Prices;
