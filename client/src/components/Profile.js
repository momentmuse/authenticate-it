import React, { useEffect, useState } from 'react';
import apiServiceJWT from './../ApiServiceJWT';
const initialState = {
  firstName: '',
  lastName: '',
};

// useEffectJWT(() => {
//   const accessToken = localStorage.getItem('accessToken');
//   const getProfile = async (accessToken) => {
//     const userInfo = await apiServiceJWT.profile(accessToken);
//     if (userInfo) {
//       const { firstName, lastName } = userInfo;
//       setState((prevState) => {
//         return {
//           ...prevState,
//           firstName,
//           lastName,
//         };
//       });
//     } else {
//       console.log('No user info found 😞');
//     }
//   };
//   console.log('in useEffect ', accessToken);
//   getProfile(accessToken);
// }, []);

const Profile = () => {
  const [state, setState] = useState(initialState);

  const firstName = state.firstName || 'Missing';
  const lastName = state.lastName || 'No.';

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    const getProfile = async (accessToken) => {
      const userInfo = await apiServiceJWT.profile(accessToken);
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
    console.log('in useEffect ', accessToken);
    getProfile(accessToken);
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
