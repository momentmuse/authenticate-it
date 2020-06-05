import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import Profile from './components/Profile';
import Logout from './components/Logout';

import './App.css';

// const routes = {
//   public: ['home'],
//   verified: ['profile', 'logout'],
//   unverified: ['register', 'login'],
// };

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
            <Route path="/profile" component={Profile} />
            <Route path="/logout" component={Logout} />
            <Route path="/" component={Home} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
