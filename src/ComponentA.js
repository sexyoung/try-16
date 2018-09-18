import React from 'react'
import PropTypes from 'prop-types'

class ComponentA extends React.Component {
  render () {
    console.warn('ComponentA');
    return (
      <div>ComponentA{this.props.value}</div>
    )
  }
}

export default ComponentA;
