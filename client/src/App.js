import React from 'react';
import Navbar from './components/Navbar';
// import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';

import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Login />
      <Register />
    </div>
  );
}

export default App;
