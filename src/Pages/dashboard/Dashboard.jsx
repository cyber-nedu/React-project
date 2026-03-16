import Sidebar from '../../components/Sidebar';
import './Dashboard.css';

function Dashboard() {
  

  return (
    <>
      <div className="dashboard-container">
        <Sidebar />

        <main className="dashboard-main">
          <div className="dashboard-header">
            <h1>Welcome back, Developer 👋</h1>
            <p className="subtitle">
              Here’s what’s happening with your platform today.
            </p>
          </div>

          <div className="stats-grid">
            <div className="stat-card users">
              <h3>Total Users</h3>
              <p className="stat-number">1,245</p>
              <span className="stat-trend up">+12% this week</span>
            </div>

            <div className="stat-card visitors">
              <h3>Website Visitors</h3>
              <p className="stat-number">3,892</p>
              <span className="stat-trend up">+8% today</span>
            </div>

            <div className="stat-card unregistered">
              <h3>Unregistered Visitors</h3>
              <p className="stat-number">1,122</p>
              <span className="stat-trend down">-2% drop</span>
            </div>

            <div className="stat-card projects">
              <h3>Active Projects</h3>
              <p className="stat-number">17</p>
              <span className="stat-trend up">+3 new</span>
            </div>
          </div>

          <div className="activity-panel">
            <h2>Recent Activity</h2>
            <div className="activity-list">
              <div className="activity-item">🚀 New user registered</div>
              <div className="activity-item">📊 Dashboard analytics updated</div>
              <div className="activity-item">⚙️ Settings changed</div>
              <div className="activity-item">👤 Profile updated</div>
            </div>
          </div>
        </main>
      </div>

    </>
  );
}

export default Dashboard;
 