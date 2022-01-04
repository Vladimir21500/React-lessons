import React, { Component } from 'react';

class Toggler extends Component {
  constructor(props) {
    super(props);

    this.state = {
      condition: 'Off',
    };
  }

  setCondition = e => {
    this.setState({
      condition: e.target.textContent === 'Off' ? 'On' : 'Off',
    });
  };

  render() {
    return (
      <div onClick={this.setCondition} className="toggler">
        {this.state.condition}
      </div>
    );
  }
}

export default Toggler;
