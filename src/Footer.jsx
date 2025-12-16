import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer>
       
        <div className="text">
          <p>Privacy |</p>
          <p>Terms |</p>
          <p>Support</p>
        </div><br />
          <div className="text1">
            <p>&copy; {currentYear} CodeLab Inc. All rights reserved. </p>
          </div>
      </footer>
      
    </>
  );
}

export default Footer;