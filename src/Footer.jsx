import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer>
        <p>&copy; {currentYear} React project </p>
      </footer>
      
    </>
  );
}

export default Footer;