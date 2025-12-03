import { FaBell, FaUserCircle } from "react-icons/fa";
import "./AdminNavbar.scss";

const AdminNavbar = () => {
  return (
    <div className="admin-navbar">
      <h2 className="admin-title">Admin Dashboard</h2>

      <div className="admin-icons">
        <FaBell className="nav-icon" size={20} />
        <FaUserCircle className="nav-icon" size={26} />
      </div>
    </div>
  );
};

export default AdminNavbar;
