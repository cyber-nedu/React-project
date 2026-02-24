import { useState, useRef } from 'react';
import {
  LayoutDashboard, User, Settings, Activity,
  BarChart3, Camera, Menu, X
} from 'lucide-react';
import { Link } from 'react-router-dom';
import './Dashboard.css';

function Dashboard() {
  const [profileImage, setProfileImage] = useState(localStorage.getItem('userProfilePic') || null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); 
  const fileInputRef = useRef(null);

  const handleIconClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result;
        setProfileImage(base64String);
        localStorage.setItem('userProfilePic', base64String);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <div className="dashboard-container">
        <button
          className="mobile-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        <aside className={isMobileMenuOpen ? "active" : ""}>
          <div className="profile-section">
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              accept="image/*"
              style={{ display: 'none' }}
            />
            <div className="profile-upload-box" onClick={handleIconClick}>
              {profileImage ? (
                <img src={profileImage} alt="User Profile" className="profile-img" />
              ) : (
                <div className="profile-placeholder">
                  <Camera size={24} />
                  <span>Add Photo</span>
                </div>
              )}
              <div className="hover-edit">Change</div>
            </div>
            <p className="user-label">Developer Admin</p>
          </div>

          <div className="side-nav">
            <h2>Dashboard</h2>
            <ul>
              <li onClick={() => setIsMobileMenuOpen(false)}>
                <Link to="/dashboard/overview"><LayoutDashboard size={18} /> Overview</Link>
              </li>
              <li onClick={() => setIsMobileMenuOpen(false)}>
                <Link to="/dashboard/profile"><User size={18} /> Profile</Link>
              </li>
              <li onClick={() => setIsMobileMenuOpen(false)}>
                <Link to="/dashboard/settings"><Settings size={18} /> User Management</Link>
              </li>
              <li onClick={() => setIsMobileMenuOpen(false)}>
                <Link to="/dashboard/activity"><Activity size={18} /> Activity</Link>
              </li>
              <li onClick={() => setIsMobileMenuOpen(false)}>
                <Link to="/dashboard/support"><BarChart3 size={18} /> User Analytics</Link>
              </li>
            </ul>
          </div>
        </aside>

        {isMobileMenuOpen && <div className="overlay" onClick={() => setIsMobileMenuOpen(false)}></div>}

        <main className="dashboard-main-content">
          <header className="content-header">
            <div className="header-text">
              <h1>Welcome back, Dev! </h1>
              <p>Here is what's happening with your code today.</p>
            </div>
            <div className="header-actions">
              <button className="secondary-btn">Download Report</button>
              <button className="primary-btn">+ New Project</button>
            </div>
          </header>

          <section className="stats-grid">
            <div className="stat-card">
              <div className="stat-icon purple"><Activity size={20} /></div>
              <div className="stat-info">
                <h3>1,284</h3>
                <p>Active Deployments</p>
              </div>
              <span className="trend positive">+12%</span>
            </div>
            <div className="stat-card">
              <div className="stat-icon blue"><BarChart3 size={20} /></div>
              <div className="stat-info">
                <h3>98.2%</h3>
                <p>Server Uptime</p>
              </div>
              <span className="trend positive">+2%</span>
            </div>
            <div className="stat-card">
              <div className="stat-icon orange"><User size={20} /></div>
              <div className="stat-info">
                <h3>432</h3>
                <p>New Collaborators</p>
              </div>
              <span className="trend neutral">0%</span>
            </div>
          </section>

          <div className="main-grid-layout">
            <section className="recent-projects">
              <div className="section-title">
                <h2>Recent Projects</h2>
                <Link to="/dashboard/support">View all</Link>
              </div>
              <div className="project-list">
                {[
                  { name: "E-commerce API", lang: "Node.js", status: "Production" },
                  { name: "AI Chatbot UI", lang: "React", status: "Testing" },
                  { name: "Mobile Wallet", lang: "Flutter", status: "In Review" }
                ].map((project, idx) => (
                  <div key={idx} className="project-item">
                    <div className="project-dot"></div>
                    <div className="project-details">
                      <h4>{project.name}</h4>
                      <p>{project.lang}</p>
                    </div>
                    <span className={`status-badge ${project.status.toLowerCase().replace(' ', '-')}`}>
                      {project.status}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            <section className="performance-card">
              <h2>System Performance</h2>
              <div className="chart-placeholder">
                <div className="bar" style={{ height: '60%' }}></div>
                <div className="bar" style={{ height: '80%' }}></div>
                <div className="bar" style={{ height: '40%' }}></div>
                <div className="bar" style={{ height: '90%' }}></div>
                <div className="bar" style={{ height: '50%' }}></div>
              </div>
              <p>CPU usage is stable at 24% capacity.</p>
            </section>
          </div>
        </main>
      </div>

      <div className="dashboard-container">
      <button
        className="mobile-toggle"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      <aside className={isMobileMenuOpen ? "active" : ""}>
        <div className="profile-section">
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            accept="image/*"
            style={{ display: 'none' }}
          />
          <div className="profile-upload-box" onClick={handleIconClick}>
            {profileImage ? (
              <img src={profileImage} alt="User Profile" className="profile-img" />
            ) : (
              <div className="profile-placeholder">
                <Camera size={24} />
                <span>Add Photo</span>
              </div>
            )}
            <div className="hover-edit">Change</div>
          </div>
          <p className="user-label">Developer Admin</p>
        </div>

        <div className="side-nav">
          <h2>Dashboard</h2>
          <ul>
            <li onClick={() => setIsMobileMenuOpen(false)}>
              <Link to="/dashboard/overview"><LayoutDashboard size={18} /> Overview</Link>
            </li>
            <li onClick={() => setIsMobileMenuOpen(false)}>
              <Link to="/dashboard/profile"><User size={18} /> Profile</Link>
            </li>
            <li onClick={() => setIsMobileMenuOpen(false)}>
              <Link to="/dashboard/settings"><Settings size={18} /> User Management</Link>
            </li>
            <li onClick={() => setIsMobileMenuOpen(false)}>
              <Link to="/dashboard/activity"><Activity size={18} /> Activity</Link>
            </li>
            <li onClick={() => setIsMobileMenuOpen(false)}>
              <Link to="/dashboard/support"><BarChart3 size={18} /> User Analytics</Link>
            </li>
          </ul>
        </div>
      </aside>

      {isMobileMenuOpen && <div className="overlay" onClick={() => setIsMobileMenuOpen(false)}></div>}

      <main className="dashboard-main-content">
        <header className="content-header">
          <div className="header-text">
            <h1>Welcome back, Dev! </h1>
            <p>Here is what's happening with your code today.</p>
          </div>
          <div className="header-actions">
            <button className="secondary-btn">Download Report</button>
            <button className="primary-btn">+ New Project</button>
          </div>
        </header>

        <section className="stats-grid">
          <div className="stat-card">
            <div className="stat-icon purple"><Activity size={20} /></div>
            <div className="stat-info">
              <h3>1,284</h3>
              <p>Active Deployments</p>
            </div>
            <span className="trend positive">+12%</span>
          </div>
          <div className="stat-card">
            <div className="stat-icon blue"><BarChart3 size={20} /></div>
            <div className="stat-info">
              <h3>98.2%</h3>
              <p>Server Uptime</p>
            </div>
            <span className="trend positive">+2%</span>
          </div>
          <div className="stat-card">
            <div className="stat-icon orange"><User size={20} /></div>
            <div className="stat-info">
              <h3>432</h3>
              <p>New Collaborators</p>
            </div>
            <span className="trend neutral">0%</span>
          </div>
        </section>

        <div className="main-grid-layout">
          <section className="recent-projects">
            <div className="section-title">
              <h2>Recent Projects</h2>
              <Link to="/dashboard/support">View all</Link>
            </div>
            <div className="project-list">
              {[
                { name: "E-commerce API", lang: "Node.js", status: "Production" },
                { name: "AI Chatbot UI", lang: "React", status: "Testing" },
                { name: "Mobile Wallet", lang: "Flutter", status: "In Review" }
              ].map((project, idx) => (
                <div key={idx} className="project-item">
                  <div className="project-dot"></div>
                  <div className="project-details">
                    <h4>{project.name}</h4>
                    <p>{project.lang}</p>
                  </div>
                  <span className={`status-badge ${project.status.toLowerCase().replace(' ', '-')}`}>
                    {project.status}
                  </span>
                </div>
              ))}
            </div>
          </section>

          <section className="performance-card">
            <h2>System Performance</h2>
            <div className="chart-placeholder">
              <div className="bar" style={{ height: '60%' }}></div>
              <div className="bar" style={{ height: '80%' }}></div>
              <div className="bar" style={{ height: '40%' }}></div>
              <div className="bar" style={{ height: '90%' }}></div>
              <div className="bar" style={{ height: '50%' }}></div>
            </div>
            <p>CPU usage is stable at 24% capacity.</p>
          </section>
        </div>
      </main>
      </div>
      
      {/* --- NEW SECTION: SYSTEM HEALTH & TEAM MESSAGES --- */}
      <section className="bottom-meta-section">
        <div className="health-card">
          <div className="section-title">
            <h2>Global Node Health</h2>
            <span className="live-indicator">Live</span>
          </div>
          <div className="nodes-container">
            {[
              { region: "US-East", latency: "24ms", load: 15 },
              { region: "EU-West", latency: "48ms", load: 42 },
              { region: "AS-South", latency: "112ms", load: 89 },
              { region: "AU", latency: "85ms", load: 73 },
              { region: "Nigeria", latency: "60ms", load: 55 }
            ].map((node, i) => (
              <div key={i} className="node-row">
                <div className="node-info">
                  <span className="node-name">{node.region}</span>
                  <span className="node-latency">{node.latency}</span>
                </div>
                <div className="node-bar-bg">
                  <div
                    className={`node-bar-fill ${node.load > 80 ? 'critical' : ''}`}
                    style={{ width: `${node.load}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="team-card">
          <div className="section-title">
            <h2>Team Updates</h2>
          </div>
          <div className="updates-list">
            {[
              { initials: "SK", name: "Sarah K.", action: "Pushed 12 commits to", target: "main", time: "2 mins ago", color: "" },
              { initials: "JH", name: "Jason H.", action: "Resolved issue", target: "#402", time: "45 mins ago", color: "blue" },
              { initials: "AA", name: "Alex A.", action: "Deployed new build to", target: "Staging", time: "1 hour ago", color: "purple" },
              { initials: "ML", name: "Maria L.", action: "Added 4 new assets to", target: "UI Library", time: "3 hours ago", color: "orange" },
              { initials: "RB", name: "Ryan B.", action: "Merged pull request", target: "#881", time: "5 hours ago", color: "purple" },
              { initials: "NG", name: "Tech_div.", action: "Created a new branch", target: "", time: "6 hours ago", color: "green" },
            ].map((person, index) => (
              <div className="update-item" key={index}>
                <div className={`update-avatar ${person.color}`}>{person.initials}</div>
                <div className="update-text">
                  <p>
                    <strong>{person.name}</strong> {person.action} <code>{person.target}</code>
                  </p>
                  <span>{person.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Dashboard;