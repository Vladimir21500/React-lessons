import React, { Component } from 'react';
import Expand from './Expand.jsx';

class App extends Component {
  render() {
    return (
      <Expand title="some title">
        <p>Some content</p>
      </Expand>
    );
  }
}

export default App;
