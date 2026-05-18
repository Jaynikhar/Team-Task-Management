import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();

  const styles = {
    logoutBtn: {
      padding: "8px 15px",
      backgroundColor: "#e74c3c",
      border: "none",
      color: "white",
      borderRadius: "5px",
      cursor: "pointer",
    },
  };

  const handleLogout = () => {
    localStorage.clear(); // remove token + everything
    window.location.href = "/login";
  };

  return (
    <nav className="nav">
      <h2>Task Manager</h2>

      <div className="nav-links">
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/tasks">Tasks</Link>

        <button onClick={handleLogout} style={styles.logoutBtn}>
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;