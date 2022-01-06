import React, { Component } from 'react';

class ColorPicker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      buttonColor: '',
    };
  }

  setColorTitle = e => {
    this.setState({
      buttonColor: e.target.style.backgroundColor,
    });
  };

  render() {
    return (
      <div>
        <div className="picker__title">{this.state.buttonColor}</div>
        <div>
          <button
            onMouseOver={this.setColorTitle}
            className="picker__button picker__button_coral"
          ></button>
          <button
            onMouseOver={this.setColorTitle}
            className="picker__button picker__button_aqua"
          ></button>
          <button
            onMouseOver={this.setColorTitle}
            className="picker__button picker__button_bisque"
          ></button>
        </div>
      </div>
    );
  }
}

export default ColorPicker;
