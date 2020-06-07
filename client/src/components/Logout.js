import React, { useState } from 'react';
import apiService from './../ApiService';
import { Link, Redirect } from 'react-router-dom';

const Logout = () => {
  // TODO: add session cookie to React Context
  const [redirect, setRedirect] = useState(false);

  const logout = () => {
    apiService.logout();
    setRedirect(true);
  };

  return (
    <div>
      <h2>Are you sure you want to log out?</h2>
      <button onClick={() => logout()}>Yes</button>
      <Link to="/">
        <button>No</button>
      </Link>
      {redirect && <Redirect to={'/'} />}
    </div>
  );
};

export default Logout;
