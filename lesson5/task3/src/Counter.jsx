import React, { Component } from 'react';

class GoodButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };

    this.decrement = this.decrement.bind(this);
  }

  decrement() {
    this.setState({
      counter: this.state.counter - 1,
    });
  }

  increment = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };

  reset() {
    this.setState({
      counter: 0,
    });
  }

  render() {
    return (
      <div className="counter">
        <button onClick={this.decrement} className="counter__button">
          -
        </button>
        <span className="counter__value" onClick={() => this.reset()}>
          {this.state.counter}
        </span>
        <button onClick={this.increment} className="counter__button">
          +
        </button>
      </div>
    );
  }
}

export default GoodButton;
