import { useEffect, useState } from "react"; // Added useState
import { Link } from "react-router-dom";
import './About.css';

// Separate function for the Portal
function RegisterPortal({ isOpen, onClose }) {

  // 1. Add state to track inputs and errors
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  if (!isOpen) return null;

  // 2. Function to handle the registration click
  const handleRegister = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      setSuccess("");
      return;


    } else {
      setError(""); 
      setSuccess("Successfully Registered!");

      // Optional: Auto-close or clear message after delay
      setTimeout(() => {
        setSuccess("");
      }, 2000);
    }
  };

  return (
    <div className="portal-overlay">
      <div className="portal-card">
        <h2>Create Your Account</h2>
        <p>Enter your details to get started with CodeLab.</p>

        <form className="portal-form" onSubmit={handleRegister}>
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email Address" required />

          {/* 3. Bind value and onChange to Password */}
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {/* 4. Bind value and onChange to Confirm Password */}
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

          {/* 5. Display messages */}
          {error && <p className="error-message">{error} ❌</p>}
          {success && <p className="success-message">{success} ✅</p>}

          <div className="portal-btns">
            <button type="button" className="cancel-btn" onClick={onClose}>Cancel</button>
            <button type="submit" className="register-submit-btn">Register</button>
          </div>
        </form>
      </div>
    </div>
  );
}

function AboutPage() {
  const [showPortal, setShowPortal] = useState(false);

  useEffect(() => {
    document.title = 'CodeLab - About'
  }, [])

  return (
    <>
      <RegisterPortal isOpen={showPortal} onClose={() => setShowPortal(false)} />

      <main>
        <div className="container">
          <section className="about-hero-section">
            <h1 className="about-hero-title">
              **Driven by Simplicity, Defined by Trust.**
            </h1>
            <p className="about-hero-subtitle">
              We are building the most seamless and secure registration platform, empowering thousands of users globally to connect and grow without friction.
            </p>

            <button className="cta-button primary" onClick={() => setShowPortal(true)}>
              Get Started
            </button>
          </section>

          <section className="mission-vision-section">
            <div className="mission-card">
              <i className="card-icon">🎯</i>
              <h2>Our Mission</h2>
              <p>To eliminate complexity from the digital registration process, making access to essential services and communities instant, intuitive, and universally available.</p>
            </div>
            <div className="mission-card">
              <i className="card-icon">🔭</i>
              <h2>Our Vision</h2>
              <p>To be the world's most trusted gateway for digital identity verification and community onboarding, setting the gold standard for user experience and data security.</p>
            </div>
          </section>

          <section className="values-section">
            <h2 className="section-title">The Principles That Guide Us</h2>
            <div className="values-grid">
              <div className="value-item">
                <i className="value-icon">✨</i>
                <h3>Excellence</h3>
                <p>We strive for perfection in every line of code and every interaction, ensuring reliability.</p>
              </div>
              <div className="value-item">
                <i className="value-icon">🤝</i>
                <h3>Integrity</h3>
                <p>We operate with complete transparency, putting the privacy and security of our users first.</p>
              </div>
              <div className="value-item">
                <i className="value-icon">🌱</i>
                <h3>Innovation</h3>
                <p>We constantly seek new ways to improve the user experience and adapt to future technological landscapes.</p>
              </div>
            </div>
          </section>

          <section className="story-section">
            <div className="story-image-placeholder">
              <h1>Wants To Know More About Us</h1><br />
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non sunt ratione ad possimus totam itaque veritatis aspernatur quibusdam maxime. Eius iure, tenetur sequi nesciunt explicabo labore itaque et aliquid eveniet.</p><br />
              <Link to="https://github.com/cyber-nedu"><button>Click to see profile</button></Link>
            </div>
            <div className="story-content">
              <h2 className="section-title left-align">Our Journey So Far</h2>
              <p>Founded in 2025 by a small team frustrated with complex onboarding forms, codelab was born from a simple idea: registration should be effortless.</p>
              <p>Since then, we have grown into a global solution, continually refining our algorithms and expanding our integration partnerships.</p>
              <a href="" className="cta-link">Meet Our Leadership</a>
            </div>
          </section>
        </div>

        <section className="final-cta-about">
          <div className="container">
            <h2>Ready to experience the best registration platform?</h2>
            <button className="cta-button primary" onClick={() => setShowPortal(true)}>
              Register Now
            </button>
          </div>
        </section>
      </main>
    </>
  );
}

export default AboutPage;