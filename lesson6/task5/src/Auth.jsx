import React, { Component } from 'react';
import Spinner from './Spinner.jsx';
import Login from './Login.jsx';
import Logout from './Logout.jsx';

class Auth extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
      processing: false,
    };
  }

  handleLog = () => {
    this.setState({
      processing: true,
    });
    setTimeout(() => {
      this.setState({
        processing: false,
        isLoggedIn: !this.state.isLoggedIn,
      });
    }, 2000);
  };

  render() {
    const button = this.state.isLoggedIn ? (
      <Logout onLogout={this.handleLog} />
    ) : (
      <Login onLogin={this.handleLog} />
    );

    return (
      <div className="panel">
        {this.state.processing && <Spinner size={'20px'} />}
        {!this.state.processing && button}
      </div>
    );
  }
}

export default Auth;
