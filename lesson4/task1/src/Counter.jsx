import React, { Component } from 'react';
import './counter.scss';

let counter = 0;

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: props.start,
    };

    //demonstaration

    setInterval(() => {
      this.setState({
        counter: this.state.counter + 1,
      });
      counter += 1;
      console.log(counter);
    }, props.interval);
  }

  render() {
    return <div className="counter">{this.state.counter}</div>;
  }
}

export default Counter;
