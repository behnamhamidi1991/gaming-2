import { Link } from "react-router-dom";
import "./header.css";
import { GiNinjaHeroicStance } from "react-icons/gi";
import { FaUser } from "react-icons/fa";
import { IoMdSunny } from "react-icons/io";
import { FaMoon } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import profileImage from "../../assets/users/3.jpg";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import Headroom from "react-headroom";

const Header = ({ darkTheme, theme }: any) => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const [openSideMenu, setOpenSideMenu] = useState<boolean>(true);

  return (
    <Headroom>
      <header>
        <Link to="/" className="header-logo">
          <GiNinjaHeroicStance className="header-logo-image" />
          <span>Ninja Gamer</span>
        </Link>
        <div className={!openSideMenu ? "header-links open" : "header-links"}>
          <Link to="/" className="header-logo only-mobile">
            <GiNinjaHeroicStance className="header-logo-image" />
            <span>Ninja Gamer</span>
          </Link>
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
          <Link to="/Contact" className="header-link-item only-mobile">
            Dashboard
          </Link>
          <Link to="/Contact" className="header-link-item only-mobile">
            Logout
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
          <li onClick={() => setOpenMenu(!openMenu)}>
            <img
              src={profileImage}
              alt="profile-image"
              className="header-profile-image"
            />
          </li>
          <div
            className={
              openMenu ? "header-setting menu-block" : "header-setting"
            }
          >
            <li className="header-setting-item-1">Setting</li>
            <li className="header-setting-item-2 ">Tickets</li>
            <li className="header-setting-item-3 ">Log Out</li>
          </div>
        </div>
        <RxHamburgerMenu
          className="burger-icon"
          onClick={() => setOpenSideMenu(!openSideMenu)}
        />
      </header>
    </Headroom>
  );
};

export default Header;
