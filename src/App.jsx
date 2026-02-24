import { useState, useEffect } from 'react';
import Loading from './components/Loading/Loading.jsx';

import Header from './Header.jsx';
import Footer from './Footer.jsx';
import './App.css';
import HomePage from './Pages/home/HomePage.jsx';
import AboutPage from './Pages/about/AboutPage.jsx';
import ContactPage from './Pages/contact/ContactPage.jsx';
import ServicePage from './Pages/service/ServicePage.jsx';
import BlogPage from './Pages/blog/BlogPage.jsx';
import Dashboard from './Pages/dashboard/Dashboard.jsx';
import Overview from './Pages/overview/Overview.jsx';
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

        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/overview" element={<Overview />} />

        <Route path="*" element={<NotfoundPage />} />
      </Routes>
    </div>
  );
}

export default App;