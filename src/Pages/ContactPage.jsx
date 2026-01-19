import { useEffect } from "react";
import { Link } from "react-router-dom";
import './Contact.css'; 
import { Icon } from "@iconify/react";

function ContactPage() {
  
  useEffect(() => {
    document.title = 'CodeLab - Contact';
  }, []); 

  return (
    <div className="contact-container">

      <header className="contact-header">
        <h1>Get In Touch With CodeLab</h1>
        <p>We'd love to hear from you. Drop us a line, and let's build something amazing together!</p>
      </header>

      <main className="contact-content">

        {/* 1. Contact Form Section */}
        <section className="contact-form-section">
          <h2>Send Us A Message</h2>
          <form className="contact-form" onSubmit={(e) => e.preventDefault()}> {/* Use onSubmit and preventDefault in React */}

            <div className="input-group">
              <label htmlFor="name">Your Name</label>
              <input type="text" id="name" name="name" required placeholder="John Doe" />
            </div>

            <div className="input-group">
              <label htmlFor="email">Your Email</label>
              <input type="email" id="email" name="email" required placeholder="name@example.com" />
            </div>

            <div className="input-group">
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" name="subject" required placeholder="Project Inquiry or Support" />
            </div>

            <div className="input-group">
              <label htmlFor="message">Your Message</label>
              <textarea id="message" name="message" rows="5" required placeholder="Tell us more about your needs..."></textarea>
            </div>

            <button type="submit" className="submit-btn">
              {/* Assuming you have imported Font Awesome or another icon library */}
              <i className="fas fa-paper-plane"></i> Send Message
            </button>
          </form>
        </section>

        {/* 2. Information Sidebar */}
        <aside className="contact-info-sidebar">
          <h2>Our Details</h2>

          <div className="info-card">
            <i className="fas fa-map-marker-alt icon-animated"></i>
            <div>
              <h3>Office Address</h3>
              <p>Eneka, rumuchiorlu by chiyere maternity street.</p>
            </div>
          </div>

          <div className="info-card">
            <i className="fas fa-phone-alt icon-animated"></i>
            <div>
              <h3>Call Us</h3>
              <p>09129449905</p>
            </div>
          </div>
          
          <div className="info-card">
            <i className="fas fa-envelope icon-animated"></i>
            <div>
              <h3>Email Us</h3>
              <p>chinedu.daniel.ernest@gmail.com</p>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="social-links">

            <Link to='https://github.com/cyber-nedu' target="blank"><Icon className="social-icon" icon="mdi:github" /></Link>

            <Link to='https://web.facebook.com/profile.php?id=61573720972880' target="blank"><Icon className="social-icon" icon="mdi:facebook" /></Link>

            <Link to='https://www.youtube.com/@edu_ernest' target="blank"><Icon className="social-icon" icon="mdi:youtube" /></Link>
          </div>
        </aside>

      </main>

      {/* 3. Map/Location Placeholder */}
      <section className="location-map">
        <h2>Find Our Location</h2>
        <div className="map-placeholder">
          <iframe
            className="embed-map-frame"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
            src="https://www.google.com/maps/embed?pb=..." 
            title="CodeLab Location"
          >
          </iframe>        
        </div>
      </section>
    </div>
  );
}

export default ContactPage;

// Note: Ensure you link Font Awesome in your public/index.html or main entry file:
// <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">