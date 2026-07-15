import "../../styles/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <h2>Stone Code Studio</h2>
      </div>

      <ul className="nav-links">
        <li>Home</li>
        <li>Explore</li>
        <li>Groups</li>
        <li>Music</li>
      </ul>

      <div className="nav-buttons">
        <button className="login-btn">Login</button>
        <button className="signup-btn">Get Started</button>
      </div>
    </nav>
  );
}

export default Navbar;