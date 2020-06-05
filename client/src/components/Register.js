import React, { useState } from 'react';
import apiService from './../ApiService';

const initialState = {
  email: '',
  password: '',
  firstName: '',
  lastName: '',
};

const Register = () => {
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
    const { email, password, firstName, lastName } = state;
    const user = { email, password, firstName, lastName };
    apiService.register(user);
    setState(initialState);
  };

  const validateForm = () => {
    return !(
      state.email ||
      state.password ||
      state.firstName ||
      state.lastName
    );
  };

  return (
    <div>
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
        <input
          type="text"
          placeholder="Name"
          name="firstName"
          value={state.firstName}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Nameson"
          name="lastName"
          value={state.lastName}
          onChange={handleChange}
        />
        <button className="form-submit" type="submit" disabled={validateForm()}>
          &nbsp;Register&nbsp;
        </button>
      </form>
    </div>
  );
};

export default Register;
