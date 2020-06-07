import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ isAuthenticated }) => {
  return (
    <ul>
      <li>
        <Link to="/">
          <h1>Authenticate It! Sessions</h1>
        </Link>
      </li>
      {isAuthenticated ? (
        <React.Fragment>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link to="/logout">Logout</Link>
          </li>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </React.Fragment>
      )}
    </ul>
  );
};

export default Navbar;
