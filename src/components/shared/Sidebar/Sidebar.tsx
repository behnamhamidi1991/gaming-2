import "./sidebar.css";
import { users } from "../../../userData";

const Sidebar = () => {
  const blogWriter = users.filter((item) => item.id === "10");

  return (
    <div className="sidebar">
      <div className="first-sidebar-writer">
        {blogWriter.map((item) => (
          <img src={item.profileImage} alt="" />
        ))}
      </div>
      <div className="second-sidebar-blog"></div>
      <div className="third-sidebar-productions"></div>
    </div>
  );
};

export default Sidebar;
