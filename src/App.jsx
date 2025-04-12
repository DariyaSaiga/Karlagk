import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';

import HomePage from './pages/HomePage/HomePage.jsx';
import AboutUs from './pages/AboutUs/AboutUs.jsx';
import InteractiveMap from './pages/InteractiveMap/InteractiveMap.jsx';
import ArcheologyMap from './pages/ArcheologyMap/ArcheologyMap.jsx';
import BlogAndPost from './pages/BlogPost/BlogPost';
import Sources from './pages/Sources/Sources.jsx';
import Contact from './pages/Contact/Contact.jsx';
import SeeMorePage from './pages/SeeMorePage/NewsPage.jsx';
import ScrollToTop from './pages/SeeMorePage/ScrollToTop';


function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/map" element={<InteractiveMap />} />
        <Route path="/archeology" element={<ArcheologyMap />} />
        <Route path="/blog" element={<BlogAndPost />} />
        <Route path="/sources" element={<Sources />} />
        <Route path="/contacts" element={<Contact />} />
        <Route path="/more" element={<SeeMorePage />} />
      </Routes>
      <Footer />
    </Router>
  )
};

export default App;
