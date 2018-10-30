import React from 'react'
import PropTypes from 'prop-types'

import { TouchableOpacity, Text } from 'react-native'

import styles from './styles'

class Button extends React.PureComponent {
  render() {
    const { onPress, color, children, size } = this.props

    return (
      <TouchableOpacity
        style={[
          styles.container,
          ...size === 'standard' && [
            styles.standardContainer,
            color !== null && { backgroundColor: color },
          ],
          ...size === 'small' && [
            styles.smallContainer,
            color !== null && { borderColor: color },
          ],
        ]}
        onPress={onPress}
        activeOpacity={0.8}
      >
        <Text
          style={[
            styles.text,
            size === 'standard' && styles.standardText,
            ...size === 'small' && [
              styles.smallText,
              { color },
            ],
          ]}
        >
          {children.toUpperCase()}
        </Text>
      </TouchableOpacity>
    )
  }
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['standard', 'small']),
  onPress: PropTypes.func,
  color: PropTypes.string,
}

Button.defaultProps = {
  size: 'standard',
  onPress: null,
  color: null,
}

export default Button
