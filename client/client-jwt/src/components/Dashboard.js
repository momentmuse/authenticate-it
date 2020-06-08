import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Register from './Register';
import Login from './Login';
import Profile from './Profile';
import Logout from './Logout';
import Home from './Home';

const Dashboard = ({ setIsAuthenticated }) => {
  return (
    <div className="dashboard">
      <Switch>
        <Route
          path="/register"
          render={(props) => (
            <Register {...props} setIsAuthenticated={setIsAuthenticated} />
          )}
        />
        <Route
          path="/login"
          render={(props) => (
            <Login {...props} setIsAuthenticated={setIsAuthenticated} />
          )}
        />
        <Route path="/profile" component={Profile} />
        <Route
          path="/logout"
          render={(props) => (
            <Logout {...props} setIsAuthenticated={setIsAuthenticated} />
          )}
        />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
};

export default Dashboard;
