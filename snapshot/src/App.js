import React from 'react';
import './App.css';
import Header from './Header';
import Mountain from './Gallery/Mountain';
import Beaches from './Gallery/Beaches';
import Birds from './Gallery/Birds';
import Food from './Gallery/Food';
import './style.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />} />
          <Route path="mountain" element={<Mountain />} />
          <Route path="beaches" element={<Beaches />} />
          <Route path="birds" element={<Birds />} />
          <Route path="food" element={<Food />} />
       
      </Routes>
    </BrowserRouter>

  );
}

export default App;
