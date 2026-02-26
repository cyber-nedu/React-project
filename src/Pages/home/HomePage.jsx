import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './Home.css';

function RegisterPortal({ isOpen, onClose, existingUsers, onRegisterSuccess }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [isRegistered, setIsRegistered] = useState(false);

  if (!isOpen) return null;

  const handleRegister = (e) => {
    e.preventDefault();

    const emailExists = existingUsers.some(user => user.email.toLowerCase() === email.toLowerCase());
    const nameExists = existingUsers.some(user => user.name.toLowerCase() === name.toLowerCase());

    if (emailExists) {
      setError("This email is already registered!");
      setTimeout(() => setError(""), 2000);
      return;
    }

    if (nameExists) {
      setError("This name is already taken!");
      setTimeout(() => setError(""), 2000);
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      setTimeout(() => setError(""), 2000);
      return;
    }

    // --- ADDED LINE START ---
    localStorage.setItem('userName', name);
    // --- ADDED LINE END ---

    setError("");
    setIsRegistered(true);
    onRegisterSuccess({ name, email });
  };

  const handleFinalClose = () => {
    setIsRegistered(false);
    setName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    onClose();
  };

  return (
    <div className="portal-overlay">
      <div className="portal-card">
        {!isRegistered ? (
          <>
            <button className="cancel-btn" type="button" onClick={onClose}>✖</button>
            <div className="form-header">
              <h2>Create Your Account</h2>
              <p>Enter your details to get started with CodeLab.</p>
            </div>

            <form className="portal-form" onSubmit={handleRegister}>
              <input
                type="text"
                placeholder="Full Name"
                value={name}
                onChange={(e) => { setName(e.target.value); if (error) setError(""); }}
                required
              />
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => { setEmail(e.target.value); if (error) setError(""); }}
                required
              />

              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />

              <input
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                  if (error) setError("");
                }}
                required
              />

              {error && <p className="error-message">{error} ❌</p>}

              <div className="portal-btns">
                <button type="submit" className="register-submit-btn" title="Click to register">Register</button>
              </div>
            </form>
          </>
        ) :
          (
            <div className="success-modal-content">
              <div className="success-icon-circle">✅</div>
              <h2>Congrats, {name}!</h2>
              <p>Email: {email}</p>
              <p>You have successfully registered to <strong>CodeLab</strong>.</p>
              <button className="cta-button primary" onClick={handleFinalClose}>
                <Link to="/dashboard"> Continue to Dashboard</Link>
              </button>
            </div>
          )}
      </div>
    </div>
  );
}

function HomePage() {
  useEffect(() => {
    document.title = 'CodeLab - Home';
  }, []);

  const [activeFeature, setActiveFeature] = useState(null);

  const [showPortal, setShowPortal] = useState(false);
  const [registeredUsers, setRegisteredUsers] = useState([
    { name: "Admin", email: "admin@codelab.com" }
  ]);

  const addNewUser = (newUser) => {
    setRegisteredUsers([...registeredUsers, newUser]);
  };

  useEffect(() => {
    document.title = 'CodeLab - About'
  }, [])

  return (
    <>
      <RegisterPortal
        isOpen={showPortal}
        onClose={() => setShowPortal(false)}
        existingUsers={registeredUsers}
        onRegisterSuccess={addNewUser}
      />
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
                Start Your Project
              </Link>
              <Link onClick={() => setShowPortal(true)} className="btn btn-secondary animated-pop-in-alt">
                Get Started
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
    </>
  );
}

export default HomePage;