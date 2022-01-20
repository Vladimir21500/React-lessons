import React, { Component } from 'react';
import Dimensions from './Dimensions.jsx';

class Demo extends Component {
  state = {
    visible: false,
  };

  show = () => {
    this.setState({
      visible: true,
    });
  };
  hide = () => {
    this.setState({
      visible: false,
    });
  };
  render() {
    return (
      <div>
        <div>
          <button className="btn" onClick={this.show}>
            Show
          </button>
          <button className="btn" onClick={this.hide}>
            Hide
          </button>
        </div>
        {this.state.visible && <Dimensions />}
      </div>
    );
  }
}

export default Demo;
