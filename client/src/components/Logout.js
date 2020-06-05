import React from 'react';
import apiService from './../ApiService';
import { Link } from 'react-router-dom';

const Logout = () => {
  return (
    <div>
      <h2>Are you sure you want to log out?</h2>
      <button onClick={() => apiService.logout({ id: 'test123ID' })}>
        Yes
      </button>
      <Link to="/">
        <button>No</button>
      </Link>
    </div>
  );
};

export default Logout;
