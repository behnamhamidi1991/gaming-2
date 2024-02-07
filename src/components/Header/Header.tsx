import { Link } from "react-router-dom";
import "./header.css";
import { GiNinjaHeroicStance } from "react-icons/gi";
import { FaUser } from "react-icons/fa";
import { IoMdSunny } from "react-icons/io";
import { FaMoon } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";

const Header = ({ darkTheme, theme }) => {
  return (
    <header>
      <div className="header-logo">
        <GiNinjaHeroicStance className="header-logo-image" />
        <span>Ninja Gamer</span>
      </div>
      <div className="header-links">
        <Link to="/" className="header-link-item">
          Home
        </Link>
        <Link to="/blog" className="header-link-item">
          Blog
        </Link>
        <Link to="/blog" className="header-link-item">
          Stream
        </Link>
        <Link to="/about" className="header-link-item">
          About
        </Link>
        <Link to="/Contact" className="header-link-item">
          Contact
        </Link>
      </div>
      <div className="header-user">
        <Link to="/cart" className="cart-btn">
          <FaShoppingCart className="cart" />
          <span>0</span>
        </Link>
        <Link to="/dashboard" className="header-user-link">
          <FaUser />
          <p>Dashboard</p>
        </Link>
        <button onClick={() => darkTheme(!theme)} className="dark-light-btn">
          {theme ? <IoMdSunny /> : <FaMoon />}
        </button>
      </div>
    </header>
  );
};

export default Header;
