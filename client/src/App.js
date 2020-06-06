import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';

import './App.css';

// const routes = {
//   public: ['home'],
//   verified: ['profile', 'logout'],
//   unverified: ['register', 'login'],
// };

// const initialState = document.cookie.slice(0, 3) === 'sid';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Dashboard />
      </Router>
    </div>
  );
}

export default App;
