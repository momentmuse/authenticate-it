import React, { useState } from 'react';

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
    console.log(state);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password, firstName, lastName } = state;
    console.log(
      `eeyyy I'm submitting the ${email} with pass ${password} for ${firstName} ${lastName}`
    );
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
          value={state.name}
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
