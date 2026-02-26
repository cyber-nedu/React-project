import { useState, useEffect } from 'react'; 
import Loading from './components/Loading/Loading.jsx';

import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import './App.css';
import HomePage from './Pages/home/HomePage.jsx';
import AboutPage from './Pages/about/AboutPage.jsx';
import ContactPage from './Pages/contact/ContactPage.jsx';
import ServicePage from './Pages/service/ServicePage.jsx';
import BlogPage from './Pages/blog/BlogPage.jsx';
import Dashboard from './Pages/dashboard/Dashboard.jsx';
import User from './Pages/user-management/Users.jsx';
import Analytics from './Pages/analytics/Analytics.jsx';
import NotfoundPage from './Pages/not-found/NotfoundPage.jsx';
import { Routes, Route, Outlet } from 'react-router-dom';

const PublicLayout = () => (
  <>
    <Header />
    <main>
      <Outlet />
    </main>
    <Footer />
  </>
);

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="App">
      <Routes>
        <Route element={<PublicLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/service" element={<ServicePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/blog" element={<BlogPage />} />
        </Route>

        {/* Dashboard Routes */}
        <Route path="/dashboard" element={<Dashboard />} />
        {/* <Route path="/dashboard/activity" element={<ActivityPage />} /> */}
        <Route path="/dashboard/user" element={<User />} />
        <Route path="/dashboard/analytics" element={<Analytics />} />

        <Route path="*" element={<NotfoundPage />} />
      </Routes>
    </div>
  );
}

export default App;