import React from 'react';
import moment from 'moment';
import './profile.scss';

const formatDate = date => moment(date).format('DD MMM YY');

const Profile = props => {
  const element = (
    <div className="profile">
      <h1 className="profile__name">{`${props.userData.firstName} ${props.userData.lastName}`}</h1>
      <span className="profile__birth">{`Was  born ${formatDate(props.userData.birthDate)} in ${
        props.userData.birthPlace
      }`}</span>
    </div>
  );

  return element;
};

export default Profile;
