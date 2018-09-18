import React, { Component } from 'react';
import MyComponent from './MyComponent';

class App extends Component {
  state = { aaa: '' }
  handleChange = e => {
    for(let i = 0; i < 100; i++) {
      console.log('i: ', i);
      this.setState({
        aaa: e.target.value + 1
      })
    }
  }
  render() {
    return (
      <div className="App">
        <input value={this.state.aaa} onChange={this.handleChange}/>
        <MyComponent />
      </div>
    );
  }
}

export default App;
