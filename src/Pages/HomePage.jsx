import { useEffect } from "react";
import { Link } from "react-router-dom";
import './Home.css'


function HomePage() {

  useEffect(() => {
    document.title = 'Register - Home'
  }, []) // Added dependency array for proper effect usage

  // State variables from previous context (kept for reference, though unused in the current content)
  // const [counter, setcount] = useState(0); 
  // const [count, setCount] = useState(0);

  // const handleCLick = () => {
  //   setCount(count + 1);
  // }

  return (
    <>
      {/* NOTE: Assuming the Header and Footer components exist outside this file 
        or will wrap this component. We are focusing only on the <main> content.
      */}
      <main>
        <div className="container">

          {/* 1. HERO SECTION: The main, attention-grabbing entrance */}
          <section className="hero">
            <div className="hero-text-content">
              <h1 className="hero-title">
                **The Future of Registration is Here.**
              </h1>
              <p className="hero-subtitle">
                Streamline your onboarding, manage your applications, and unlock access to exclusive opportunities—all in one places.
              </p>
              <div className="hero-cta-group">
                <button className="cta-button primary">Start Free Today</button>
                <button className="cta-button secondary">Learn More</button>
              </div>
            </div>
            {/* Placeholder for visual appeal */}
            <div className="hero-image-placeholder">
              <h1>Looking For A Web Developer</h1><br />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia tempora repudiandae alias nam id nesciunt nisi minima ratione dolore. Deleniti maxime quas asperiores, perspiciatis a quaerat tempore mollitia reiciendis earum.</p><br />

              <Link to="https://github.com/cyber-nedu"><button>Click to see profile</button></Link>
            </div>
          </section>

          {/* 2. VALUE PROPOSITION/FEATURES SECTION: Details what the user gains */}
          <section className="value-prop-section">
            <h2 className="section-title">Designed for Simplicity, Built for Speed.</h2>
            <div className="value-grid">
              <div className="value-card">
                <i className="value-icon">⚡</i>
                <h3>Instant Access</h3>
                <p>Cut through the clutter. Get registered and start utilizing our platform immediately.</p>
              </div>
              <div className="value-card">
                <i className="value-icon">📱</i>
                <h3>Seamless Experience</h3>
                <p>Fully responsive and optimized for every device, from desktop to mobile.</p>
              </div>
              <div className="value-card">
                <i className="value-icon">🔒</i>
                <h3>Maximum Security</h3>
                <p>Rest easy knowing your personal data is protected by certified, industry-leading encryption.</p>
              </div>
            </div>
          </section>

          {/* 3. FINAL CALL-TO-ACTION SECTION: Converts visitors into users */}
          <section className="final-cta-section">
            <div className="cta-banner">
              <h2 className="cta-banner-title">Join the New Wave of Digital Registration.</h2>
              <p className="cta-banner-subtitle">Ready to experience effortless onboarding? It only takes a minute to sign up.</p>
              <button className="cta-button primary large">Secure Your Account Now</button>
            </div>
          </section>

        </div>
      </main>
    </>
  );
}

export default HomePage;