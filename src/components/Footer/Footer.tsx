import "./footer.css";
import { GiNinjaHeroicStance } from "react-icons/gi";
import companyImage1 from "../../assets/companies/1.jpg";
import companyImage2 from "../../assets/companies/2.jpg";
import companyImage3 from "../../assets/companies/3.jpg";
import companyImage4 from "../../assets/companies/4.jpg";
import companyImage5 from "../../assets/companies/5.jpg";

const Footer = () => {
  return (
    <footer>
      <div className="footer-left">
        <div className="footer-top">
          <h2>
            <GiNinjaHeroicStance className="" />
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
        <div className="footer-links">
          <ul className="link-box">
            <h4>Easy Access</h4>
            <li>home-page</li>
            <li>blog-page</li>
            <li>stream-page</li>
            <li>about-page</li>
            <li>contact-page</li>
          </ul>
          <ul className="link-box">
            <h4>Marketplace</h4>
            <li>Form Templates</li>
            <li>PDF Templates</li>
            <li>Form Themes</li>
            <li>Form Widgets</li>
            <li>Integrations</li>
          </ul>
          <ul className="link-box">
            <h4>Company</h4>
            <li>About Us</li>
            <li>Media Kit</li>
            <li>Newsletters</li>
            <li>Partnerships</li>
            <li>Integrations</li>
          </ul>
          <ul className="link-box">
            <h4>Developers</h4>
            <li>Careers</li>
            <li>Privacy</li>
            <li>Press Center</li>
            <li>Contact</li>
            <li>Support</li>
          </ul>
        </div>
      </div>
      <div className="right">
        <div className="contact-link"></div>
        <div className="subscription"></div>
      </div>
      <div className="footer-copyright"></div>
    </footer>
  );
};

export default Footer;
