import React from 'react'
import PropTypes from 'prop-types'

class ComponentC extends React.Component {
  render () {
    console.warn('ComponentC');
    return (
      <div>ComponentC{this.props.value}</div>
    )
  }
}

export default ComponentC;
