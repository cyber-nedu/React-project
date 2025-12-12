import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer>
        <div className="text">
          <div className="text1">
            <p>&copy; {currentYear} © 2025 Platform Register. All rights reserved. </p>
          </div>
          <div className="text2">
            <p>Privacy</p>
            <p>Terms</p>
            <p>Support</p>

          </div>
        </div>
      </footer>
      
    </>
  );
}

export default Footer;