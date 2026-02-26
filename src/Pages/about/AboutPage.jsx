import { Link } from "react-router-dom";
import './About.css';



function AboutPage() {

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
              <img className="developers" src="/images/developers-edit.png" alt="developers" />
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
            <p>Join thousands of users who have already simplified their registration process with CodeLab.

            </p>

          </div>
        </section>
      </main>
    </>
  );
}

export default AboutPage;