import { Link } from "react-router-dom";
import "./header.css";
import { GiNinjaHeroicStance } from "react-icons/gi";

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
        <Link to="/dashboard">Dashboard</Link>
        <button onClick={() => darkTheme(!theme)}>Light</button>
      </div>
    </header>
  );
};

export default Header;
