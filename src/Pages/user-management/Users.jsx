import { useState } from "react";
import Sidebar from "../../components/Sidebar";
import {
  User,
  Settings,
  Activity,
  LayoutDashboardIcon,
  HomeIcon,
} from "lucide-react";
import "./User.css";

const users = [
  { id: 1, name: "Ernest Daniel", email: "ernest@gmail.com", role: "Admin", online: true },
  { id: 2, name: "Sophia James", email: "sophia@gmail.com", role: "User", online: false },
  { id: 3, name: "Daniel Smith", email: "daniel@gmail.com", role: "Moderator", online: true },
  { id: 4, name: "Micheal Brown", email: "micheal@gmail.com", role: "User", online: true },
  { id: 5, name: "Emma Wilson", email: "emma@gmail.com", role: "Accountant", online: false },
  { id: 6, name: "Olivia Davis", email: "olivia@gmail.com", role: "Moderator", online: true },
  { id: 7, name: "James Miller", email: "james@gmail.com", role: "Admin", online: true },
  { id: 8, name: "Ava Johnson", email: "ava@gmail.com", role: "Accountant", online: false },
  { id: 9, name: "Liam Wilson", email: "liam@gmail.com", role: "Manager", online: false },
  { id: 10, name: "Isabella Garcia", email: "isabella@gmail.com", role: "Moderator", online: true },
  { id: 11, name: "Peter Parker", email: "peter@gmail.com", role: "Marketer", online: false },
  { id: 12, name: "Lucas Anderson", email: "lucas@gmail.com", role: "Editor", online: true },
  { id: 13, name: "George Wilson", email: "george@gmail.com", role: "Viewer", online: false },
  { id: 14, name: "Mia Martinez", email: "mia@gmail.com", role: "Guest", online: false },
  { id: 15, name: "Benjamin Lee", email: "benjamin@gmail.com", role: "Admin", online: false },
  { id: 16, name: "Zoe Thompson", email: "zoe@gmail.com", role: "Food-seller", online: false },
  { id: 17, name: "Mary God'spower", email: "mary@gmail.com", role: "Light-man", online: false },
  { id: 18, name: "Ethan White", email: "ethan@gmail.com", role: "User", online: false },
  { id: 19, name: "Adam Benjamin", email: "adam@gmail.com", role: "Administrator", online: false },
  { id: 20, name: "Clark Kent", email: "clark@gmail.com", role: "User", online: false },
];

export default function UserManagement() {
  const [search, setSearch] = useState("");

  const filtered = users.filter((u) =>
    u.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="dashboard-container">
      <Sidebar />

      <main className="dashboard-main modern-user-page">
        <div className="page-header">
          <div>
            <h1>User Management</h1>
            <p>Manage users, roles and permissions</p>
          </div>

          <button className="primary-btn">
            <User size={16} /> Add User
          </button>
        </div>

        <div className="toolbar">
          <input
            placeholder="Search users..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <div className="quick-stats">
            <div className="mini-card">
              <LayoutDashboardIcon size={18} />
              <span>120 Users</span>
            </div>
            <div className="mini-card">
              <Activity size={18} />
              <span>89 Active</span>
            </div>
            <div className="mini-card">
              <Settings size={18} />
              <span>5 Admins</span>
            </div>
          </div>
        </div>

        <div className="user-grid">
          {filtered.map((user) => (
            <div className="user-card" key={user.id}>
              <div className="avatar">
                <User size={22} />
                {user.online && <span className="online-dot"></span>}
              </div>

              <h3>{user.name}</h3>
              <p>{user.email}</p>

              <span className={`role ${user.role.toLowerCase()}`}>
                {user.role}
              </span>

              <div className="card-actions">
                <button className="ghost-btn">View</button>
                <button className="ghost-btn">Edit</button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}