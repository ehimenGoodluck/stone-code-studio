import { Link } from "react-router-dom";
import "../../styles/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
        <ul className="nav-links">
    <li>
        <Link to="/">Home</Link>
    </li>

    <li>
        <Link to="/explore">Explore</Link>
    </li>

    <li>
        <Link to="/groups">Groups</Link>
    </li>

    <li>
        <Link to="/music">Music</Link>
    </li>
</ul>
      <div className="logo">
        <h2>Stone Code Studio</h2>
      </div>

      

      <div className="nav-buttons">

    <Link to="/login">

        <button className="login-btn">
            Login
        </button>

    </Link>

    <Link to="/register">

        <button className="signup-btn">
            Get Started
        </button>

    </Link>

    </div>
    </nav>
  );
}

export default Navbar;