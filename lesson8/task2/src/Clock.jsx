import React, { Component } from 'react';
import moment from 'moment';

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({
        date: new Date(),
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  getTimeWithOffset() {
    const currentTime = new Date();
    const utcOffset = currentTime.getTimezoneOffset() / 60;
    return new Date(currentTime.setHours(currentTime.getHours() + this.props.offset + utcOffset));
  }

  render() {
    return (
      <>
        <div className="clock">
          <div className="clock__location">{this.props.location}</div>
          <div className="clock__time">{moment(this.getTimeWithOffset()).format('LTS')}</div>
        </div>
      </>
    );
  }
}

export default Clock;
