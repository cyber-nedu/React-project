import { useState, useRef, useEffect } from 'react';
import './Sidebar.css';
import {
  LayoutDashboard, User, Settings, Activity,
  BarChart3, Camera, Menu, X, LayoutDashboardIcon, HomeIcon
} from 'lucide-react';
import { Link } from 'react-router-dom';

function Sidebar() {
  const [profileImage, setProfileImage] = useState(localStorage.getItem('userProfilePic') || null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [userName, setUserName] = useState(localStorage.getItem('userName') || "Developer Admin");

  const fileInputRef = useRef(null);

  useEffect(() => {
    const storedName = localStorage.getItem('userName');
    if (storedName) {
      setUserName(storedName);
    }
  }, []);

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
          <p className="user-label">{userName}</p>
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
              <Link to="/dashboard/user"><Settings size={18} /> User Management</Link>
            </li>
            <li onClick={() => setIsMobileMenuOpen(false)}>
              <Link to="/dashboard/activity"><Activity size={18} /> Activity</Link>
            </li>
            <li onClick={() => setIsMobileMenuOpen(false)}>
              <Link to="/dashboard/support"><BarChart3 size={18} /> User Analytics</Link>
            </li>
            <li onClick={() => setIsMobileMenuOpen(false)}>
              <Link to="/dashboard"><LayoutDashboardIcon size={18} /> Dashboard</Link>
            </li>
            <li onClick={() => setIsMobileMenuOpen(false)}>
              <Link to="/"><HomeIcon size={18} /> Home</Link>
            </li>
          </ul>
        </div>
      </aside>

      {isMobileMenuOpen && <div className="overlay" onClick={() => setIsMobileMenuOpen(false)}></div>}
    </>
  )
}

export default Sidebar;