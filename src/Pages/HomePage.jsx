import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './Home.css';

function HomePage() {
  useEffect(() => {
    document.title = 'CodeLab - Home';
  }, []);

  const [activeFeature, setActiveFeature] = useState(null);

    
  return (
    <div className="homepage-container">

      <section className="hero-section-home">
        <div className="hero-content">
          <h1 className="animated-fade-in-slow">
            Innovate. Code. Create.
          </h1>
          <p className="hero-subtitle animated-fade-in-slow-alt">
            Unlock your potential with CodeLab – where ideas transform into reality.
          </p>
          <div className="hero-buttons">
            <Link to="/contact" className="btn btn-primary animated-pop-in">
              Start Your Project <i className="fas fa-arrow-right"></i>
            </Link>
            <Link to="/about" className="btn btn-secondary animated-pop-in-alt">
              Get Started <i className="fas fa-info-circle"></i>
            </Link>
          </div>
        </div>
        <div className="hero-visual-static">
          <i className="fas fa-desktop hero-icon-large"></i>
        </div>
      </section>

      <section className="features-section">
        <h2>What We Offer</h2>
        <p className="section-description">
          Powerful solutions for modern challenges.
        </p>
        <div className="features-grid">
          <div
            className={`feature-card ${activeFeature === 'development' ? 'active' : ''}`}
            onMouseEnter={() => setActiveFeature('development')}
            onMouseLeave={() => setActiveFeature(null)}
          >
            <i className="fas fa-laptop-code feature-icon"></i>
            <h3>Web & App Development</h3>
            <p>Crafting bespoke digital experiences from concept to launch.</p>
            <Link to="/services/web-dev" className="card-link">Explore <i className="fas fa-chevron-right"></i></Link>
          </div>

          <div
            className={`feature-card ${activeFeature === 'design' ? 'active' : ''}`}
            onMouseEnter={() => setActiveFeature('design')}
            onMouseLeave={() => setActiveFeature(null)}
          >
            <i className="fas fa-palette feature-icon"></i>
            <h3>UI/UX Design</h3>
            <p>Intuitive and beautiful interfaces that engage users.</p>
            <Link to="/services/design" className="card-link">Explore <i className="fas fa-chevron-right"></i></Link>
          </div>

          <div
            className={`feature-card ${activeFeature === 'consulting' ? 'active' : ''}`}
            onMouseEnter={() => setActiveFeature('consulting')}
            onMouseLeave={() => setActiveFeature(null)}
          >
            <i className="fas fa-lightbulb feature-icon"></i>
            <h3>Tech Consulting</h3>
            <p>Strategic guidance to navigate the complex tech landscape.</p>
            <Link to="/services/consulting" className="card-link">Explore <i className="fas fa-chevron-right"></i></Link>
          </div>

          <div
            className={`feature-card ${activeFeature === 'support' ? 'active' : ''}`}
            onMouseEnter={() => setActiveFeature('support')}
            onMouseLeave={() => setActiveFeature(null)}
          >
            <i className="fas fa-headset feature-icon"></i>
            <h3>Ongoing Support</h3>
            <p>Reliable maintenance and support to keep your systems running smoothly.</p>
            <Link to="/services/support" className="card-link">Explore <i className="fas fa-chevron-right"></i></Link>
          </div>
        </div>
      </section>

      <section className="testimonials-section">
        <div className="parallax-bg"></div>
        <div className="testimonials-overlay">
          <h2>What Our Clients Say</h2>
          <div className="testimonial-card animated-zoom-in">
            <i className="fas fa-quote-left quote-icon"></i>
            <p>"CodeLab transformed our vision into a stunning, high-performing application. Their team is incredibly talented and a pleasure to work with!"</p>
            <div className="client-info">
              <span className="client-name">Ernest Daniel .C. </span>, CEO of CodeLab
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-content">
          <h2>Ready to Build Your Next Big Thing?</h2>
          <p>Let's collaborate and bring your innovative ideas to life. Contact us today for a free consultation!</p>
          <Link to="/contact" className="btn btn-cta animated-cta-pulse">
            <i className="fas fa-comments"></i> Get Started Now
          </Link>
        </div>
      </section>
    </div>

    
  );
}

export default HomePage;