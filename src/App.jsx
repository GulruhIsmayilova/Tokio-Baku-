import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Haqqimizda from './Haqqimizda'; // Haqqımızda bileşenini import edin
import Footer from './Footer';
import Muellimler from './Muellimler';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
      <Route path="/" element={<Haqqimizda />} /> {/* Ana sayfa olarak Haqqımızda */}
        <Route path="/haqqimizda" element={<Haqqimizda />} /> {/* Haqqımızda sayfası için route */}
        <Route path="/muellimler" element={<Muellimler />} />
        
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
