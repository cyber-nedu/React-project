import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer>
       
          <div className="text1">
            <p>&copy; {currentYear}© 2025 CodeLab Inc. All rights reserved. </p>
          </div>
        <div className="text">
          <p>Privacy |</p>
          <p>Terms |</p>
          <p>Support</p>
        </div>
      </footer>
      
    </>
  );
}

export default Footer;