import React, { Component } from 'react';
import Expand from './Expand.jsx';

class App extends Component {
  state = {
    isShowContent: false,
  };

  toggleContentHandle = () => {
    this.setState({
      isShowContent: !this.state.isShowContent,
    });
  };

  render() {
    return (
      <Expand
        title="some title"
        isShowContent={this.state.isShowContent}
        onToggle={this.toggleContentHandle}
      >
        <p>Some content</p>
      </Expand>
    );
  }
}

export default App;
