import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ isAuthenticated }) => {
  return (
    <div className="navbar">
      <ul>
        <li>
          <Link to="/">
            <span role="img" aria-label="home">
              🏅
            </span>
            &nbsp;Authenticate It! JWT
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
    </div>
  );
};

export default Navbar;
