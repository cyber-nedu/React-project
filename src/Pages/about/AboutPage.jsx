import './About.css';
import { useEffect, useState } from 'react';

function AboutPage() {
  useEffect(() => {
    const elements = document.querySelectorAll('.fade-up');
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );
    elements.forEach(el => observer.observe(el));
  }, []);

  const [counts, setCounts] = useState({
    projects: 0,
    users: 0,
    satisfaction: 0,
    uptime: 0,
  });

  useEffect(() => {
    const target = { projects: 150, users: 75000, satisfaction: 98, uptime: 24 };
    const interval = setInterval(() => {
      setCounts(prev => ({
        projects: prev.projects < target.projects ? prev.projects + 2 : target.projects,
        users: prev.users < target.users ? prev.users + 1200 : target.users,
        satisfaction: prev.satisfaction < target.satisfaction ? prev.satisfaction + 1 : target.satisfaction,
        uptime: prev.uptime < target.uptime ? prev.uptime + 1 : target.uptime,
      }));
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <main>
        <div className="container">
          <section className="about-hero-section fade-up">
            <h1 className="about-hero-title">
              **Driven by Simplicity, Defined by Trust.**
            </h1>
            <p className="about-hero-subtitle">
              We are building the most seamless and secure registration platform, empowering thousands of users globally to connect and grow without friction.
            </p>
          </section>

          <section className="mission-vision-section fade-up">
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

          <section className="values-section fade-up">
            <h2 className="section-title ">The Principles That Guide Us</h2>
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

          <section className="story-section fade-up">
            <img className="developers" src="/images/developers-edit.png" alt="developers" />
            <div className="story-content">
              <h2 className="section-title left-align">Our Journey So Far</h2>
              <p>Founded in 2025 by a small team frustrated with complex onboarding forms, codelab was born from a simple idea: registration should be effortless.</p>
              <p>Since then, we have grown into a global solution, continually refining our algorithms and expanding our integration partnerships.</p>
              <a href="" className="cta-link">Meet Our Leadership</a>
            </div>
          </section>

          <section className="services-section fade-up">
            <div className="guide">
              <h2 className="section-title">What We Offer</h2>

            </div>
            <div className="values-grid">
              <div className="value-item">
                <i className="value-icon">💻</i>
                <h3>Web Solutions</h3>
                <p>High-performance platforms built with modern web technologies.</p>
              </div>
              <div className="value-item">
                <i className="value-icon">📊</i>
                <h3>Real-time Analytics</h3>
                <p>Track user behavior and engagement with live dashboards.</p>
              </div>
              <div className="value-item">
                <i className="value-icon">🤖</i>
                <h3>AI Integration</h3>
                <p>Smart automation to optimize processes and enhance UX.</p>
              </div>
              <div className="value-item">
                <i className="value-icon">☁️</i>
                <h3>Cloud & Security</h3>
                <p>Robust infrastructure with 24/7 uptime and advanced security.</p>
              </div>
            </div>
          </section>

          <section className="impact-section fade-up">
            <div className="guide-impact">
              <h2>Our Live Impact</h2>

            </div>
            <div className="impact-grid">
              <div className="impact-card floating-card">
                <div className="impact-bg"></div>
                <h3>{counts.projects}+</h3>
                <p>Projects Completed</p>
              </div>
              <div className="impact-card floating-card">
                <div className="impact-bg"></div>
                <h3>{counts.users.toLocaleString()}+</h3>
                <p>Active Users</p>
              </div>
              <div className="impact-card floating-card">
                <div className="impact-bg"></div>
                <h3>{counts.satisfaction}%</h3>
                <p>Client Satisfaction</p>
              </div>
              <div className="impact-card floating-card">
                <div className="impact-bg"></div>
                <h3>{counts.uptime}/7</h3>
                <p>System Uptime</p>
              </div>
            </div>
          </section>

          <section className="team-section fade-up">
            <div className="guide">
              <h2 className="section-title">Meet the Team</h2>
            </div>
            <div className="values-grid">
              <div className="value-item">
                <img src="/images/team1.jpg" alt="Team Member" className="team-img" />
                <h3>Ernest Daniel</h3>
                <p>Founder & CEO</p>
              </div>
              <div className="value-item">
                <img src="/images/team2.png" alt="Team Member" className="team-img" />
                <h3>Sophia James</h3>
                <p>Lead Developer</p>
              </div>
              <div className="value-item">
                <img src="/images/team3.png" alt="Team Member" className="team-img" />
                <h3>Michael Lee</h3>
                <p>Product Manager</p>
              </div>
              <div className="value-item">
                <img src="/images/team3.png" alt="Team Member" className="team-img" />
                <h3>Michael Lee</h3>
                <p>Product Manager</p>
              </div>

              <div className="value-item">
                <img src="/images/team2.png" alt="Team Member" className="team-img" />
                <h3>Sophia James</h3>
                <p>Lead Developer</p>
              </div>
              <div className="value-item">
                <img src="/images/team1.jpg" alt="Team Member" className="team-img" />
                <h3>Ernest Daniel</h3>
                <p>Founder & CEO</p>
              </div>
            </div>
          </section>

        </div>

        <section className="final-cta-about fade-up">
          <div className="container">
            <h2>Ready to experience the best registration platform?</h2>
            <p>Join thousands of users who have already simplified their registration process with CodeLab.</p>
            <button className="cta-button primary">Get Started</button>
          </div>
        </section>
      </main>
    </>
  );
}

export default AboutPage;