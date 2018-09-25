import React from 'react'
import PropTypes from 'prop-types'

import { TouchableOpacity, Text } from 'react-native'

import styles from './styles'

class AlertLabel extends React.PureComponent {
  render() {
    const { children, onPress, color, style } = this.props

    return (
      <TouchableOpacity
        style={[
          styles.container,
          style,
          color !== null && {
            backgroundColor: color,
          },
        ]}
        onPress={onPress}
        activeOpacity={0.8}
      >
        <Text style={styles.text}>
          {children}
        </Text>
      </TouchableOpacity>
    )
  }
}

AlertLabel.propTypes = {
  children: PropTypes.number.isRequired,
  onPress: PropTypes.func.isRequired,
  color: PropTypes.string,
  style: PropTypes.number,
}

AlertLabel.defaultProps = {
  style: null,
}

export default AlertLabel
