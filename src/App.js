import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Kabaddi from './pages/kabaddi';
import Cricket from './pages/cricket';
import Tennis from './pages/tennis';
import Football from './pages/football';
import Hockey from './pages/hockey';
import Volleyball from './pages/volleyball';



function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/kabaddi' element ={<Kabaddi/>} />
          <Route path='/cricket' element={<Cricket/>} />
          <Route path='/tennis'  element={<Tennis/>} />
          <Route path='/football'element={<Football/>} />
          <Route path='/hockey'element={<Hockey/>} />
          <Route path='/volleyball' element={<Volleyball/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;