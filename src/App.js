// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import HeroSection from './Components/Hero';
import ServicesSection from './Components/Services';
import Footer from './Components/Footer';
import Dashboard from '../src/Components/Dashboard'
import AIBotCallingPage from './Home'; // Ensure this file exists and is correctly named

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<>
          <HeroSection />
          <ServicesSection />
          </>} />
          <Route path="/ai-bot-calling" element={<AIBotCallingPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/ai-bot-calling" element={<AIBotCallingPage />} />
          <Route path="/ai-bot-calling" element={<AIBotCallingPage />} />
        </Routes>
        
        <Footer />
      </div>
    </Router>
  );
};

export default App;
