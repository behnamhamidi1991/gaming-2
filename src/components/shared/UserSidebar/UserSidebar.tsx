import "./usersidebar.css";
import { users } from "../../../userData";

const UserSidebar = () => {
  const userLogin = users.filter((item) => item.id === "3");

  return (
    <div className="user-sidebar">
      <div className="user-sidebar-user">
        {userLogin.map((user) => (
          <div key={user.id} className="user-sidebar-user-box">
            <img src={user.profileImage} alt="user-profile" />
            <div className="user-sidebar-user-content">
              <p>Name: {user.name}</p>
              <p>
                Status:{" "}
                <span style={{ color: "rgb(16, 190, 126)", fontWeight: "700" }}>
                  Online
                </span>
              </p>
              <p>Followers: {user.followers}</p>
              <p>Following: {user.following}</p>
              <p>
                Account:{" "}
                <span style={{ color: "#3c62df", fontWeight: "700" }}>
                  VIP Account
                </span>
              </p>
              <p>Country: {user.country}</p>
              <p>City: {user.city}</p>
            </div>
            <div className="user-sidebar-btn-container">
              <button className="user-sidebar-logout-btn">Logout</button>
              <button className="user-sidebar-settings-btn">Settings</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserSidebar;
