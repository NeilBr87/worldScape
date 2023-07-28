import './App.css';
import React from 'react';
import {useState} from 'react';
import Navigator from '../Navigator';
import StartMenu from '../StartMenu';
import { Routes, Route } from 'react-router-dom';

function App() {



  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

function Home() {
  return (
    <div>
      <StartMenu />
    </div>
  )
}

export default App;
