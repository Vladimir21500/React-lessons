import React, { Component } from 'react';

class ConnectionStatus extends Component {
  state = {
    status: 'online',
  };

  componentDidMount() {
    window.addEventListener('online', this.onChangeStatus);
    window.addEventListener('offline', this.onChangeStatus);
  }

  componentWillUnmount() {
    window.removeEventListener('online', this.onChangeStatus);
    window.removeEventListener('offline', this.onChangeStatus);
  }

  onChangeStatus = () => {
    this.setState({
      status: this.state.status === 'online' ? 'offline' : 'online',
    });
  };

  render() {
    return this.state.status === 'online' ? (
      <div className="status">online</div>
    ) : (
      <div className="status status_offline">offline</div>
    );
  }
}

export default ConnectionStatus;
