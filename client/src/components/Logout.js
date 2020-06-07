import React from 'react';
import auth from '../utils/auth';
import apiService from './../ApiService';
import { Link } from 'react-router-dom';

const Logout = (props) => {
  const handleClick = () => {
    apiService.logout();
    handleAuth();
  };

  const handleAuth = () => {
    props.setIsAuthenticated(false);
    auth.logout(() => props.history.push('/'));
  };

  return (
    <div>
      <h2>Are you sure you want to log out?</h2>
      <button onClick={() => handleClick()}>Yes</button>
      <Link to="/">
        <button>No</button>
      </Link>
    </div>
  );
};

export default Logout;
