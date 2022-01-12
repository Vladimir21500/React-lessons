import React, { Component } from 'react';

class ConnectionStatus extends Component {
  state = {
    status: 'online',
    classStatus: 'status',
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
      classStatus: this.state.status === 'online' ? 'status status_offline' : 'status',
    });
  };

  render() {
    return <div className={this.state.classStatus}>{this.state.status}</div>;
  }
}

export default ConnectionStatus;
