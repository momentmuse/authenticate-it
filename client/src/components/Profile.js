import React, { useEffect, useState } from 'react';
import apiService from './../ApiService';
const initialState = {
  firstName: '',
  lastName: '',
};

const Profile = () => {
  const [state, setState] = useState(initialState);

  const firstName = state.firstName || 'Missing';
  const lastName = state.lastName || 'No.';

  useEffect(() => {
    const getProfile = async () => {
      const userInfo = await apiService.profile();
      console.log('reply from /me path ', userInfo);
      if (userInfo) {
        const { firstName, lastName } = userInfo;
        setState((prevState) => {
          return {
            ...prevState,
            firstName,
            lastName,
          };
        });
      } else {
        console.log('No user info found 😞');
      }
    };
    getProfile();
  }, []);

  return (
    <div>
      <h2>
        Welcome Back, {firstName} {lastName}
      </h2>
    </div>
  );
};

export default Profile;
