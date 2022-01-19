import React, { Component } from 'react';

const baseUrl = 'https://api.github.com/users';

class User extends Component {
  state = {
    user: {},
  };

  fetchUser = id => {
    fetch(`${baseUrl}/${id}`)
      .then(response => response.json())
      .then(user => user)
      .then(res => {
        this.setState({
          user: res,
        });
      });
  };

  componentDidMount() {
    this.fetchUser(this.props.match.params.userId);
  }

  /* shouldComponentUpdate(nextProps) {
    console.log(nextProps);
    console.log(this.props);
    return nextProps.match.params.userId !== this.props.match.params.userId;
  } */

  componentDidUpdate() {
    this.fetchUser(this.props.match.params.userId);
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
