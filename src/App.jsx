import Header from './Header.jsx';
import Footer from './Footer.jsx';
import './App.css';
import HomePage from './Pages/HomePage.jsx';
import AboutPage from './Pages/AboutPage.jsx';
import ContactPage from './Pages/ContactPage.jsx';
import ServicePage from './Pages/ServicePage.jsx';
import BlogPage from './Pages/BlogPage.jsx';
import NotfoundPage from './Pages/NotfoundPage.jsx';
import { Routes, Route } from 'react-router-dom';

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

export default App;

