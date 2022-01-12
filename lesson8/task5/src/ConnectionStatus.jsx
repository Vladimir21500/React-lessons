import React, { Component } from 'react';

class ConnectionStatus extends Component {
  state = {
    online: true,
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
      online: !this.state.online,
    });
  };

  render() {
    return this.state.online ? (
      <div className="status">Online</div>
    ) : (
      <div className="status status_offline">Offline</div>
    );
  }
}

export default ConnectionStatus;
