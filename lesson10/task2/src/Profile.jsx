import React from 'react';
import UserForm from './UserForm.jsx';

const Profile = props => {
  return (
    <div className="column">
      <UserForm userData={props.userData} handleChange={props.handleChange} />
    </div>
  );
};

export default Profile;
