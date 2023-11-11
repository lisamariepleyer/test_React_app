import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import HomePageTwo from './HomePageTwo';

function App() {
  return (
      <div className="App">
          <Routes>
              <Route path='/test_React_app' element={<HomePage/>} />
              <Route path='/test_React_app/homepagetwo' element={<HomePageTwo/>} />
          </Routes>
      </div>
  );
}

export default App;
