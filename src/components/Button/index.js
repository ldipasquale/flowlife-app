import React from 'react'
import PropTypes from 'prop-types'

import { TouchableOpacity, View, Text } from 'react-native'

import styles from './styles'

class Button extends React.PureComponent {
  render() {
    const { onPress, color, children } = this.props

    return (
      <TouchableOpacity
        style={[
          styles.container,
          color !== null && {
            backgroundColor: color,
          },
        ]}
        onPress={onPress}
        activeOpacity={0.8}
      >
        <Text style={styles.text}>
          {children.toUpperCase()}
        </Text>
      </TouchableOpacity>
    )
  }
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  onPress: PropTypes.func,
  color: PropTypes.string,
}

Button.defaultProps = {
  onPress: null,
  color: null,
}

export default Button
