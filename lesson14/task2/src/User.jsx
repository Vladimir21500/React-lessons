import React, { Component, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const baseUrl = 'https://api.github.com/users';

const User = () => {
  const [userInfo, setUserInfo] = useState(null);
  const { userId } = useParams();

  useEffect(() => {
    fetch(`${baseUrl}/${userId}`)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error();
      })
      .then(user => {
        setUserInfo(user);
      });
  }, [userId]);

  if (!userInfo) return null;

  const { avatar_url, name, location } = userInfo;
  return (
    <div className="user">
      <img alt="User Avatar" src={avatar_url} className="user__avatar" />
      <div className="user__info">
        <span className="user__name">{name}</span>
        <span className="user__location">{location}</span>
      </div>
    </div>
  );
};

export default User;
