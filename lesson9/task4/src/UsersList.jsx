import React, { Component } from 'react';
import Filter from './Filter.jsx';
import User from './User.jsx';

class UsersList extends Component {
  state = {
    value: '',
  };

  changeHandler = event => {
    this.setState({
      value: event.target.value,
    });
  };

  filterUsers() {
    return this.props.users
      .slice()
      .filter(user => user.name.toUpperCase().includes(this.state.value.toUpperCase()));
  }

  render() {
    return (
      <>
        <Filter onChange={this.changeHandler} />
        <ul className="users">
          {this.filterUsers().map(({ id, name, age }) => (
            <User key={id} name={name} age={age} />
          ))}
        </ul>
      </>
    );
  }
}

export default UsersList;
