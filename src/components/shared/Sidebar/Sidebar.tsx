import "./sidebar.css";
import { users } from "../../../userData";
import { productions, sidebarLinks } from "../../../data";
import { AiFillInstagram } from "react-icons/ai";
import { FaTelegram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { useParams } from "react-router-dom";

const Sidebar = () => {
  const blogWriter = users.filter((item) => item.id === "10");

  const { id } = useParams();

  const newProduction = productions.filter((item) => item.id !== id);

  console.log(newProduction);

  const sideBarProduction = newProduction.slice(0, 4);

  return (
    <div className="sidebar">
      <div className="first-sidebar-writer">
        {blogWriter.map((item) => (
          <div key={item.id} className="first-sidebar-writer-info">
            <img src={item.profileImage} alt="" />
            <h3>{item.name}</h3>
            <p>
              <b>About me: </b>Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Quia inventore asperiores perspiciatis magni
              ullam, numquam, maxime rem delectus non quasi quis expedita
              aliquam minus iure adipisci recusandae aut quaerat enim.
            </p>
            <div className="contact-me">
              <li>
                <AiFillInstagram className="writer-contact-icon" />
              </li>
              <li>
                <FaTelegram className="writer-contact-icon" />
              </li>
              <li>
                <FaFacebook className="writer-contact-icon" />
              </li>
              <li>
                <FaSquareXTwitter className="writer-contact-icon" />
              </li>
              <li>
                <FaYoutube className="writer-contact-icon" />
              </li>
              <li>
                <IoLogoWhatsapp className="writer-contact-icon" />
              </li>
              <li>
                <FaLinkedin className="writer-contact-icon" />
              </li>
            </div>
          </div>
        ))}
      </div>
      <div className="second-sidebar-blog">
        <h3>Blog Posts</h3>

        {sidebarLinks.map((link) => (
          <a key={link.id} href={link.link}>
            {link.title}
          </a>
        ))}
      </div>
      <div className="third-sidebar-productions">
        <h3>Other Productions</h3>
        {sideBarProduction.map((item) => (
          <div key={item.id} className="third-sidebar-productions-image">
            <img src={item.image} alt={item.title} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
