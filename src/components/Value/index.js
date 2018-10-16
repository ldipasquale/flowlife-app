import React from 'react'
import PropTypes from 'prop-types'
import { Text } from 'react-native'

import styles from './styles'

class Value extends React.PureComponent {
  render() {
    const { children, color, fontSize, style } = this.props

    return (
      <Text
        style={[
          styles.value,
          color !== null && {
            color,
          },
          fontSize !== null && {
            fontSize,
          },
          style,
        ]}
      >
        {children}
      </Text>
    )
  }
}

Value.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.node,
  ]).isRequired,
  color: PropTypes.string,
  fontSize: PropTypes.number,
  style: PropTypes.number,
}

Value.defaultProps = {
  color: null,
  fontSize: null,
  style: null,
}

export default Value
