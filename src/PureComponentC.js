import React from 'react'
import PropTypes from 'prop-types'

class PureComponentC extends React.PureComponent {
  render () {
    console.warn('PureComponentC');
    return (
      <div>PureComponentC{this.props.value}</div>
    )
  }
}

export default PureComponentC;
