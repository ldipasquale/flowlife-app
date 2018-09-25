import React from 'react'
import PropTypes from 'prop-types'

import { TouchableOpacity, Text } from 'react-native'

import styles from './styles'

class Button extends React.PureComponent {
  render() {
    const { children, onPress, color } = this.props

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
  onPress: PropTypes.func.isRequired,
  color: PropTypes.string,
}

Button.defaultProps = {
  color: null,
}

export default Button
