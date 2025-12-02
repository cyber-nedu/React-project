import { Link } from "react-router-dom";
import './Header.css'

function Header() {
  return (
    <>
      <nav>
        <div className="logo">
          <h1><Link to="/" className="active">LOGO</Link></h1>
        </div>
      <ul>
        <li>
          <Link to="/" className="link">Home</Link>
        </li>
        <li>
            <Link to="/about" className="link">About</Link>
        </li>
        <li>
            <Link to="/service" className="link">Service</Link>
        </li>
        <li>
            <Link to="/blog" className="link">Blog</Link>
        </li>
        <li>
            <Link to="/contact" className="link">Contact</Link>
        </li>
      </ul>
     </nav>
    </>
  );
}

export default Header;