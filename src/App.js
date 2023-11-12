import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import HomePageTwo from './HomePageTwo';

function App() {
  return (
      <div className="App">
          <Routes>
              <Route path='/' element={<HomePage/>} />
              <Route path='/homepagetwo' element={<HomePageTwo/>} />
          </Routes>
      </div>
  );
}

export default App;
