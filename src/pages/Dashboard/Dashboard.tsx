import "./dashboard.css";
import UserSidebar from "../../components/shared/UserSidebar/UserSidebar";
import { FaCartPlus } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { HiMiniUserGroup } from "react-icons/hi2";
import { FaServer } from "react-icons/fa";
import { RiVipFill } from "react-icons/ri";
import { BsAwardFill } from "react-icons/bs";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard-top">
        <h2>Dashboard - Profile</h2>
        <p>Manage your account through this page</p>
      </div>
      <div className="dashboard-content">
        <div className="dashboard-content-left">
          <div className="dashboard-item">
            <FaCartPlus className="dashboard-item-icon" />
            <h4>Your Orders</h4>
            <p>0 Orders for now</p>
          </div>
          <div className="dashboard-item">
            <FaUser className="dashboard-item-icon" />
            <h4>Followers</h4>
            <p>12549 people follow you</p>
          </div>
          <div className="dashboard-item">
            <HiMiniUserGroup className="dashboard-item-icon" />
            <h4>Following</h4>
            <p>You follow 8465 people</p>
          </div>
          <div className="dashboard-item">
            <FaServer className="dashboard-item-icon" />
            <h4>Following</h4>
            <p>You follow 8465 people</p>
          </div>
          <div className="dashboard-item">
            <RiVipFill className="dashboard-item-icon" />
            <h4>Your VIP Card</h4>
            <p>Click to change options</p>
          </div>
          <div className="dashboard-item">
            <BsAwardFill className="dashboard-item-icon" />
            <h4>Awards</h4>
            <p>FIFA 2023 - Vienna Competition</p>
          </div>
        </div>
        <div className="dashboard-content-right">
          <UserSidebar />
        </div>
      </div>
      <div className="dashboard-bottom"></div>
    </div>
  );
};

export default Dashboard;
