import { useEffect } from 'react';
import './Service.css';
import { Link } from 'react-router-dom';

function ServicePage() {

  useEffect(() => {
    document.title = 'CodeLab - Service'
  })

  const servicesData = [
    {
      icon: '🚀',
      title: 'Real-Time Code Execution',
      description: 'Test, debug, and run your code snippets instantly across multiple languages without leaving your browser. Fast, reliable, and production-ready environment.',
    },
    {
      icon: '🧠',
      title: 'AI-Powered Code Assistance',
      description: 'Get intelligent suggestions, automatic error detection, and code completion powered by a cutting-edge model, enhancing your productivity.',
    },
    {
      icon: '🌐',
      title: 'Collaborative Live Coding',
      description: 'Share your Code Lab session with teammates and collaborate in real-time. See their changes instantly, making pair programming seamless.',
    },
    {
      icon: '📚',
      title: 'Integrated Learning Tracks',
      description: 'Access curated tutorials and challenges right within the Code Lab. Master new frameworks and languages with hands-on practice.',
    },
  ];

  const featuresData = [
    'Zero Setup Required: Start coding in seconds.',
    'Multi-Language Support: From Javascript to Python.',
    'Version Control Integration: Seamless Git workflow.',
    'Private Project Hosting: Securely store your work.',
    'Dedicated Support: 24/7 technical assistance.',
  ];


  return (
    <div className="service-container">

      {/* 1. Hero Section */}
      <header className="hero-section">
        <h1>Unlock Your Coding Potential with **Code Lab**</h1>
        <p className="subtitle">The ultimate online IDE designed for speed, collaboration, and learning. Write, run, and refine your code—all in one powerful place.</p>
        <button className="cta-button">Start Your Free Lab</button>
      </header>

      <section className="services-grid">
        <h2 className="section-title">Core Services & Capabilities</h2>
        <div className="cards-container">
          {servicesData.map((service, index) => (
            <div key={index} className="service-card">
              <span className="card-icon">{service.icon}</span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="feature-spotlight">
        <div className="feature-content">
          <h2 className="section-title">Elevate Teamwork with Live Collaboration</h2>
          <p>Gone are the days of sending files back and forth. Code Lab offers a synchronous, shared environment where multiple developers can work on the same file instantly. Perfect for remote teams and technical interviews.</p>
          <ul>
            <li>Shared Cursors: See where your peers are typing.</li>
            <li>Integrated Chat: Discuss code changes in context.</li>
            <li>Secure Sharing: Invite specific users with granular permissions.</li>
          </ul>
        </div>
        <div className="feature-image-placeholder">
          <h1>Wants To Join Us!! </h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, sed quaerat fugiat earum possimus placeat fugit nihil sit, laudantium pariatur vel, voluptatem sint dolores minima. Fugit eum maxime sit ipsum.</p><br />
          <Link to="https://github.com/cyber-nedu" target='blank'><button>Click to see profile</button></Link>
          
        </div>
      </section>

      <section className="cta-bar">
        <div className="cta-content">
          <h3>Ready to Revolutionize Your Workflow?</h3>
          <p>Explore our flexible plans tailored for individual developers and enterprise teams.</p>
        </div>
        <button className="cta-button secondary-cta">View Pricing Plans</button>
      </section>

      <section className="benefits-section">
        <h2 className="section-title">Why Developers Choose Code Lab</h2>
        <div className="benefits-list">
          {featuresData.map((feature, index) => (
            <div key={index} className="benefit-item">
              <span className="check-icon">✓</span>
              <p>{feature}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default ServicePage;