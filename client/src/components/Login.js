import React, { useState } from 'react';
import apiService from './../ApiService';

const initialState = {
  email: '',
  password: '',
};

const Login = () => {
  const [state, setState] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = state;
    const user = { email, password };
    console.log('what is apiservice', apiService);
    apiService.login(user);
    setState(initialState);
  };

  const validateForm = () => {
    return !(state.email || state.password);
  };

  return (
    <div>
      <h2>Login</h2>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="name@mail.com"
          name="email"
          value={state.email}
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="supersecretthingy"
          name="password"
          value={state.password}
          onChange={handleChange}
        />
        <button className="form-submit" type="submit" disabled={validateForm()}>
          &nbsp;Login&nbsp;
        </button>
      </form>
    </div>
  );
};

export default Login;
