import React, { Component } from 'react';

class ColorPicker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      buttonColor: '',
    };
  }

  setTitle(color) {
    this.setState({
      buttonColor: color,
    });
  }

  clearTitle = () => {
    this.setState({
      buttonColor: '',
    });
  };

  render() {
    return (
      <div>
        <div className="picker__title">{this.state.buttonColor}</div>
        <div>
          <button
            className="picker__button picker__button_coral"
            onMouseEnter={() => this.setTitle('Coral')}
            onMouseLeave={this.clearTitle}
          ></button>
          <button
            onMouseEnter={() => this.setTitle('Aqua')}
            onMouseLeave={this.clearTitle}
            className="picker__button picker__button_aqua"
          ></button>
          <button
            onMouseEnter={() => this.setTitle('Bisque')}
            onMouseLeave={this.clearTitle}
            className="picker__button picker__button_bisque"
          ></button>
        </div>
      </div>
    );
  }
}

export default ColorPicker;
