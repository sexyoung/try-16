import React, { Component } from 'react';

export default class MyComponent extends Component {
  state = { aaa: 0, ccc: '' }
  static getDerivedStateFromProps(props, state) {
    console.warn('nextProps: ', props);
    console.warn('prevState: ', state);
    // return {aaa: props.aaa, bbb: 123};
    return null;
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.warn('abc');
    // console.warn(`prevProps: `, prevProps);
    return {
      aaa: this.state.aaa
    };
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.warn(snapshot);
  }
  render() {
    console.warn('render aaa: ', this.state.aaa);
    return (
      <div>
        <div>this.state.aaa: {this.state.aaa}</div>
        <button onClick={() => {
          for(let i=0; i< 10; i++) {
            console.warn('fuck!');
            this.setState({aaa: this.state.aaa + i});
          }
        }}>button</button>
        
      </div>
    );
  }
}
