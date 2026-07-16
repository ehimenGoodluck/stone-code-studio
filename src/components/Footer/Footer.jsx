import "../../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-section">
        <h2>Stone Code Studio</h2>
        <p>
          Build. Create. Connect.
        </p>
      </div>

      <div className="footer-section">
        <h3>Quick Links</h3>
        <p>Home</p>
        <p>Explore</p>
        <p>Music</p>
        <p>Groups</p>
      </div>

      <div className="footer-section">
        <h3>Community</h3>
        <p>Stories</p>
        <p>Posts</p>
        <p>Events</p>
        <p>Creators</p>
      </div>

      <div className="footer-section">
        <h3>Contact</h3>
        <p>Email: info@stonecodestudio.com</p>
        <p>Phone: +234 XXX XXX XXXX</p>
      </div>

    </footer>
  );
}

export default Footer;