import { useEffect } from "react";
import { Link } from "react-router-dom";
import './About.css'; 

function AboutPage() {
  useEffect(() => {
    document.title = 'Register - About'
  }, []) 

  return (
    <>
      <main>
        <div className="container">
          <section className="about-hero-section">
            <h1 className="about-hero-title">
              **Driven by Simplicity, Defined by Trust.**
            </h1>
            <p className="about-hero-subtitle">
              We are building the most seamless and secure registration platform, empowering thousands of users globally to connect and grow without friction.
            </p>
          </section>

          {/* 2. MISSION & VISION */}
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

          {/* 3. CORE VALUES */}
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

          {/* 4. STORY / HISTORY */}
          <section className="story-section">
            <div className="story-image-placeholder">
              <h1>Wants To Know More About Us</h1><br />
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non sunt ratione ad possimus totam itaque veritatis aspernatur quibusdam maxime. Eius iure, tenetur sequi nesciunt explicabo labore itaque et aliquid eveniet.</p><br />
              <Link to="https://github.com/cyber-nedu"><button>Click to see profile</button></Link>
            </div>
            <div className="story-content">
              <h2 className="section-title left-align">Our Journey So Far</h2>
              <p>Founded in 20XX by a small team frustrated with complex onboarding forms, **Platform Register** was born from a simple idea: registration should be effortless.</p>
              <p>Since then, we have grown into a global solution, continually refining our algorithms and expanding our integration partnerships. We believe that technology should serve the user, not complicate their access.</p>
              <a href="#footer" className="cta-link">Meet Our Leadership</a>
            </div>
          </section>

        </div>

        {/* 5. FINAL CALL-TO-ACTION (Full Width) */}
        <section className="final-cta-about">
          <div className="container">
            <h2>Ready to experience the best registration platform?</h2>
            <button className="cta-button primary">Register Now</button>
          </div>
        </section>
      </main>
    </>
  );
}

export default AboutPage;