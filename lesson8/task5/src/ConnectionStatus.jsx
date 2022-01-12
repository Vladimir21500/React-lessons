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
    const { status } = this.state;
    return (
      <div className={`status ${status === 'offline' ? ' status_offline' : ''}`}>{status}</div>
    );
  }
}

export default ConnectionStatus;
