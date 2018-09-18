import React from 'react'
import PropTypes from 'prop-types'

class ComponentB extends React.Component {
  render () {
    console.warn('ComponentB');
    return (
      <div>ComponentB{this.props.value}</div>
    )
  }
}

export default ComponentB;
