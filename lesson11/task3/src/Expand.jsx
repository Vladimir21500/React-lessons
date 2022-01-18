import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Expand extends Component {
  state = {
    isShowContent: false,
  };

  toggleContentHandle = () => {
    this.setState({
      isShowContent: !this.state.isShowContent,
    });
  };

  render() {
    const content = this.state.isShowContent ? (
      <div className="expand__content">
        {this.props.children}
        <p>
          Hooks are a new addition in React 16.8. They let you use state and other React features
          without writing a class.
        </p>
      </div>
    ) : null;

    const icon = this.state.isShowContent ? (
      <i className="fas fa-chevron-right"></i>
    ) : (
      <i className="fas fa-chevron-down"></i>
    );

    return (
      <div className="expand border">
        <div className="expand__header">
          <span className="expand__title">{this.props.title}</span>
          <button className="expand__toggle-btn" onClick={this.toggleContentHandle}>
            {icon}
          </button>
        </div>
        {content}
      </div>
    );
  }
}

Expand.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Expand;
