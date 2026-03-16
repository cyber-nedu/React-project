import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h2 className="footer-logo">Code<span>Lab</span></h2>
          <p className="footer-tagline">
            Empowering developers to build the future, one line of code at a time.
          </p>
        </div>

        <div className="footer-column">
          <h3>Platform</h3>
          <ul>
            <li><a href="#courses">Courses</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#mentorship">Mentorship</a></li>
          </ul>
        </div>

        <div className="footer-column newsletter">
          <h3>Stay Updated</h3>
          <p>Get the latest coding tutorials and tips.</p>
          <form action="https://www.youtube.com/" className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Enter your email" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} CodeLab Inc. All rights reserved.</p>
        <div className="footer-legal">
          <a href="">Privacy Policy</a>
          <a href="">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;