import React, { Component } from 'react';

const baseUrl = 'https://api.github.com/users';

class User extends Component {
  state = {
    user: {},
  };

  fetchUserInfo = id => {
    fetch(`${baseUrl}/${id}`)
      .then(response => response.json())
      .then(user => user)
      .then(res => {
        this.setState({
          user: res,
        });
      });
  };

  componentDidUpdate(prevProp) {
    if (this.props.match.params.userId !== prevProp.match.params.userId) {
      this.fetchUserInfo(this.props.match.params.userId);
    }
  }

  render() {
    const { avatar_url, name, location } = this.state.user;
    return (
      <div className="user">
        <img alt="User Avatar" src={avatar_url} className="user__avatar" />
        <div className="user__info">
          <span className="user__name">{name}</span>
          <span className="user__location">{location}</span>
        </div>
      </div>
    );
  }
}

export default User;
