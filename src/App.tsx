import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Pricing from './components/Pricing';
import PaymentForm from './components/PaymentForm';
import BusinessForm from './components/BusinessForm';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import ThankYou from './components/ThankYou';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Footer from './components/Footer';
import ChatbotButton from './components/ChatbotButton';
import Terms from './components/Terms';
import UserDashboard from './components/UserDashboard';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header/>
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/payment/:planId" element={<PaymentForm />} />
          <Route path="/business-form" element={<BusinessForm />} />
          <Route path="/thank-you" element={<ThankYou />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/terms" element={<Terms />} />
           <Route path="/userdashboard" element={<UserDashboard />} />
        </Routes>
        {/* <ChatbotButton/>/ */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;