import { Link } from "react-router-dom";
import "./header.css";
import { GiNinjaHeroicStance } from "react-icons/gi";
import { FaUser } from "react-icons/fa";
import { IoMdSunny } from "react-icons/io";
import { FaMoon } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import profileImage from "../../assets/users/3.jpg";

const Header = ({ darkTheme, theme }) => {
  return (
    <header>
      <Link to="/" className="header-logo">
        <GiNinjaHeroicStance className="header-logo-image" />
        <span>Ninja Gamer</span>
      </Link>
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
        <button onClick={() => darkTheme(!theme)} className="dark-light-btn">
          {theme ? <IoMdSunny /> : <FaMoon />}
        </button>
        <Link to="/dashboard" className="header-user-link">
          <FaUser className="header-use-link-icon" />
          <p>Dashboard</p>
        </Link>
        <li>
          <img
            src={profileImage}
            alt="profile-image"
            className="header-profile-image"
          />
        </li>
      </div>
    </header>
  );
};

export default Header;
