import React from 'react';
import apiServiceJWT from './../ApiServiceJWT';
import { Link } from 'react-router-dom';

const Logout = () => {
  // TODO: add session cookie or localStorage accessToken (JWT) to React Context

  return (
    <div>
      <h2>Are you sure you want to log out?</h2>
      <button
        onClick={() =>
          apiServiceJWT.logout(localStorage.getItem('accessToken'))
        }
      >
        Yes
      </button>
      <Link to="/">
        <button>No</button>
      </Link>
    </div>
  );
};

export default Logout;
