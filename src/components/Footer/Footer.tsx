import "./footer.css";
import { GiNinjaHeroicStance } from "react-icons/gi";
import companyImage1 from "../../assets/companies/activision.jpg";
import companyImage2 from "../../assets/companies/blizzard.jpg";
import companyImage3 from "../../assets/companies/capcom.jpg";
import companyImage4 from "../../assets/companies/ea.jpg";
import companyImage5 from "../../assets/companies/ubisoft.jpg";

const Footer = () => {
  return (
    <footer>
      <div className="footer-top">
        <h2>
          <GiNinjaHeroicStance />
          Ninja Gamer
        </h2>
        <p>Top modern gaming platform for enthusiastic players</p>
      </div>
      <div className="footer-middle">
        <img
          src={companyImage1}
          alt="company-image"
          className="company-image"
        />
        <img
          src={companyImage2}
          alt="company-image"
          className="company-image"
        />
        <img
          src={companyImage3}
          alt="company-image"
          className="company-image"
        />
        <img
          src={companyImage4}
          alt="company-image"
          className="company-image"
        />
        <img
          src={companyImage5}
          alt="company-image"
          className="company-image"
        />
      </div>
      <div className="footer-bottom"></div>
      <div className="footer-copyright"></div>
    </footer>
  );
};

export default Footer;
