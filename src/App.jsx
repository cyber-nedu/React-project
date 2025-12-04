import Header from './Header.jsx';
import Footer from './Footer.jsx';
import './App.css';
import HomePage from './components/HomePage.jsx';
import AboutPage from './components/AboutPage.jsx';
import ContactPage from './components/ContactPage.jsx';
import ServicePage from './components/ServicePage.jsx';
import BlogPage from './components/BlogPage.jsx';
import NotfoundPage from './components/NotfoundPage.jsx';
import { Routes, Route, Navigate } from 'react-router-dom';

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />;
            <Route path="/about" element={<AboutPage />} />;
            <Route path="/service" element={<ServicePage />} />;
            <Route path="/contact" element={<ContactPage />} />;
            <Route path='/blog' element={<BlogPage />} />; 
            <Route path='*' element={<NotfoundPage />} />;
          </Routes>
        </main>
        <Footer />
      </div>

    </>
  );
}

export default App
