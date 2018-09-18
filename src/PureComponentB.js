import React from 'react'
import PropTypes from 'prop-types'

class PureComponentB extends React.PureComponent {
  render () {
    console.warn('PureComponentB');
    return (
      <div>PureComponentB{this.props.value}</div>
    )
  }
}

export default PureComponentB;
