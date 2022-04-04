import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Exchange from "./components/Exchange"
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar.jsx'
ReactDOM.render(

  <BrowserRouter>
    <Navbar />
    <Routes>

      <Route path="/" element={<App />} />
      <Route path="/exchanges/:id" element={<Exchange />} />
    </Routes>

  </BrowserRouter>,
  document.getElementById('root')
);
reportWebVitals();
