import React, { useState } from 'react';
import './App.scss';
import Captcha from './components/captcha/Index';
import { Routes, Route } from 'react-router-dom';
import Entry from './components/entry/Index';
import Footer from './components/Footer';
import Header from './components/Header';
import RoleSelection from './components/roleselection/Index';
import Download from './components/pdf/Download';
import InquiryForm from './components/inquiryform/Index';
import Pharma from './components/pdf/Pharma';
import ProtectedRoute from './components/ProtectedRoute';
import AppViews from './components/AppViews';
import Home from './components/Home';

function App() {
  const [token, setTokenState] = useState(localStorage.getItem('captcha'))

  const setToken = (newToken) => {
    localStorage.setItem('captcha', newToken)
    setTokenState(newToken)
  }


  return (
    <>
      <Header />
      <Routes>
        <Route>
          <Route path="/*" element={<AppViews />} />
        </Route>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
