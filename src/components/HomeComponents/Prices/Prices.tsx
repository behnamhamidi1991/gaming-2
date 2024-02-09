import "./prices.css";
import { prices } from "../../../data";
import { BiCheck } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";

const Prices = () => {
  return (
    <div className="price-section">
      <div className="price-header">
        <h2>Upgrade your account</h2>
        <p>Upgrade your account to use our servers and streaming services</p>
      </div>

      <div className="price-container">
        {prices.map((cart) => (
          <div key={cart.id} className="price-cart">
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
              <span>Game Servers:</span>
              <span>
                {cart.vipCart === true ? (
                  <BiCheck className="true-icon" />
                ) : (
                  <RxCross2 className="false-icon" />
                )}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Prices;
