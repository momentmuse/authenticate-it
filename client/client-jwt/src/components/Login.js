import React, { useState } from 'react';
import auth from '../utils/auth';
import apiServiceJWT from './../ApiServiceJWT';

const initialState = {
  email: '',
  password: '',
};

const Login = (props) => {
  const [state, setState] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    // Check the session branch to see how to handle redirects
    // REMOVE-START
    e.preventDefault();
    const { email, password } = state;
    const user = { email, password };
    const res = await apiServiceJWT.login(user);

    if (res.error) {
      alert(`${res.message}`);
      setState(initialState);
    } else {
      const { accessToken } = res;
      localStorage.setItem('accessToken', accessToken);
      props.setIsAuthenticated(true);
      auth.login(() => props.history.push('/profile'));
    }
    // REMOVE END
  };

  const validateForm = () => {
    return !state.email || !state.password;
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
