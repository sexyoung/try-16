import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// import ComponentA from './ComponentA';
// import ComponentB from './ComponentB';
// import ComponentC from './ComponentC';

import PureComponentA from './PureComponentA';
import PureComponentB from './PureComponentB';
import PureComponentC from './PureComponentC';

class App extends Component {
  constructor() {
    super();
    this.state = {
      a: 1,
      b: 1,
      c: 1,
    }
  }
  handleClick = () => {
    this.setState({
      b: 2
    });
  }
  render() {
    console.warn('App');
    return (
      <div className="App">
        <PureComponentA value={this.state.a} />
        <PureComponentB value={this.state.b} />
        <PureComponentC value={this.state.c} />
      <button onClick={this.handleClick}>Button</button>
      </div>
    );
  }
}

export default App;
