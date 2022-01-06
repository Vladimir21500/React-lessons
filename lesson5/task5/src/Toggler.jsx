import React, { Component } from 'react';

class Toggler extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: false,
    };
  }

  setCondition = e => {
    this.setState({
      active: !this.state.active,
    });
  };

  render() {
    return (
      <div onClick={this.setCondition} className="toggler">
        {this.state.active ? 'On' : 'Off'}
      </div>
    );
  }
}

export default Toggler;
