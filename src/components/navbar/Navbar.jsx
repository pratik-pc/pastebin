import "./navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">PASTEBIN</span>
        </Link>
        <div>
          <Link style={{ color: "inherit", textDecoration: "none" }}>
            <span>Login</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;