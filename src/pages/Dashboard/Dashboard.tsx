import "./dashboard.css";
import UserSidebar from "../../components/shared/UserSidebar/UserSidebar";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard-top">
        <h2>Dashboard - Profile</h2>
        <p>Manage your account through this page</p>
      </div>
      <div className="dashboard-content">
        <div className="dashboard-content-left">Test</div>
        <div className="dashboard-content-right">
          <UserSidebar />
        </div>
      </div>
      <div className="dashboard-bottom"></div>
    </div>
  );
};

export default Dashboard;
