import Sidebar from "../../components/Sidebar";
import {
  Users,
  Eye,
  Activity,
  TrendingUp,
  Clock,
  Globe,
  BarChart3,
} from "lucide-react";
import "./Analytics.css";

function Analytics() {
  return (
    <div className="dashboard-container">
      <Sidebar />

      <main className="analytics-pro">
        <header className="analytics-header">
          <div>
            <h1>Analytics Overview</h1>
            <p>Real-time insights into your CodeLab platform performance</p>
          </div>

          <div className="live-badge">
            <span className="dot"></span>
            Live
          </div>
        </header>

        <section className="stats-grid">
          <Stat icon={<Users />} title="Total Users" value="54,392" change="+12%" />
          <Stat icon={<Eye />} title="Visitors" value="402,114" change="+18%" />
          <Stat icon={<Activity />} title="Active Users" value="3,821" change="+5%" />
          <Stat icon={<TrendingUp />} title="Conversion Rate" value="4.8%" change="+0.6%" />
        </section>

        <section className="main-grid">
          <div className="card large">
            <CardHeader title="User Growth" icon={<BarChart3 />} />
            <div className="fake-chart"></div>
            <p className="muted">
              Consistent growth trend detected across the last 30 days with
              increased onboarding completion rates.
            </p>
          </div>

          <div className="card">
            <CardHeader title="Realtime Activity" />
            <Feed />
          </div>

          <div className="card">
            <CardHeader title="Top Locations" icon={<Globe />} />
            <Geo name="Nigeria" value="34%" />
            <Geo name="United States" value="21%" />
            <Geo name="India" value="15%" />
            <Geo name="UK" value="10%" />
            <Geo name="Germany" value="7%" />
          </div>

          <div className="card">
            <CardHeader title="Session Insights" icon={<Clock />} />
            <Metric label="Avg Duration" value="6m 24s" />
            <Metric label="Bounce Rate" value="27%" />
            <Metric label="Pages / Visit" value="5.2" />
            <Metric label="Retention" value="68%" />
          </div>
        </section>

        <section className="insights-grid">
          <Insight
            title="Engagement Score"
            value="89 / 100"
            text="Users actively interacting across major platform features."
          />
          <Insight
            title="System Health"
            value="Optimal"
            highlight="green"
            text="All services running within normal thresholds."
          />
          <Insight
            title="Growth Signal"
            value="Strong"
            highlight="purple"
            text="Momentum trending above projected trajectory."
          />
        </section>
      </main>
    </div>
  );
}


const Stat = ({ icon, title, value, change }) => (
  <div className="stat">
    <div className="icon">{icon}</div>
    <div>
      <p>{title}</p>
      <h2>{value}</h2>
      <span>{change}</span>
    </div>
  </div>
);

const CardHeader = ({ title, icon }) => (
  <div className="card-header">
    {icon}
    <h3>{title}</h3>
  </div>
);

const Feed = () => (
  <div className="feed">
    <Item text="New user registered" />
    <Item text="Project deployed successfully" />
    <Item text="Subscription upgraded to Pro" />
    <Item text="Team workspace created" />
    <Item text="User completed onboarding" />
  </div>
);

const Item = ({ text }) => (
  <div className="feed-item">
    <span className="pulse"></span>
    {text}
  </div>
);

const Geo = ({ name, value }) => (
  <div className="geo">
    <span>{name}</span>
    <div className="bar">
      <div style={{ width: value }}></div>
    </div>
    <span>{value}</span>
  </div>
);

const Metric = ({ label, value }) => (
  <div className="metric">
    <span>{label}</span>
    <b>{value}</b>
  </div>
);

const Insight = ({ title, value, text, highlight }) => (
  <div className="insight">
    <p>{title}</p>
    <h2 className={highlight}>{value}</h2>
    <small>{text}</small>
  </div>
);

export default Analytics;