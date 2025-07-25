import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Import components
import PageLoader from './components/PageLoader';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ArrivalsSection from './components/ArrivalsSection';
import FeaturesSection from './components/FeaturesSection';
import ListingsSection from './components/ListingsSection';
import BlogSection from './components/BlogSection';
import MapSection from './components/MapSection';
import ContactSection from './components/ContactSection';
import StatsSection from './components/StatsSection';
import Footer from './components/Footer';

// Import pages (we'll create these next)
import BlogPage from './pages/BlogPage';
import DescPage from './pages/DescPage';
import ListingPage from './pages/ListingPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';

// Home page component
const HomePage = () => {
  return (
    <>
      <HeroSection />
      <ArrivalsSection />
      <FeaturesSection />
      <ListingsSection />
      <BlogSection />
      <MapSection />
      <ContactSection />
      <StatsSection />
    </>
  );
};

function App() {
  return (
    <Router>
      <div className="App">
        <PageLoader />
        <Navbar />
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/desc" element={<DescPage />} />
          <Route path="/listing" element={<ListingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
        </Routes>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;

