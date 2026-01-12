import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './About.css';

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
      return;
    }

    if (nameExists) {
      setError("This name is already taken!");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      setTimeout(() => setError(""), 2000);
      return;
    }

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
            <h2>Create Your Account</h2>
            <p>Enter your details to get started with CodeLab.</p>

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
                <button type="button" className="cancel-btn" onClick={onClose}>Cancel</button>
                <button type="submit" className="register-submit-btn" title="Click to register">Register</button>
              </div>
            </form>
          </>
        ) : (
          <div className="success-modal-content">
            <div className="success-icon-circle">✅</div>
            <h2>Congrats, {name}!</h2>
            <p>Email: {email}</p>
            <p>You have successfully registered to <strong>CodeLab</strong>.</p>
            <button className="cta-button primary" onClick={handleFinalClose}>
              Continue to Dashboard
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

function AboutPage() {
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
              <Link to="https://github.com/cyber-nedu" target="blank" className=""><button>Click to see profile</button></Link>
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