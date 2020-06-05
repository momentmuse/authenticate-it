import React from 'react';

const Profile = (props) => {
  const firstName = props.firstName || 'Missing';
  const lastName = props.lastName || 'No.';

  return (
    <div>
      <h2>
        Welcome Back, {firstName} {lastName}
      </h2>
    </div>
  );
};

export default Profile;
