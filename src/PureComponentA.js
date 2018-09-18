import React from 'react'
import PropTypes from 'prop-types'

class PureComponentA extends React.PureComponent {
  render () {
    console.warn('PureComponentA');
    return (
      <div>PureComponentA{this.props.value}</div>
    )
  }
}

export default PureComponentA;
