import React from 'react'
import PropTypes from 'prop-types'
import { TouchableOpacity, View } from 'react-native'

import styles from './styles'

class Card extends React.PureComponent {
  render() {
    const { children, style, onPress } = this.props

    if (onPress === null) {
      return (
        <View style={[styles.container, style]}>
          {children}
        </View>
      )
    }

    return (
      <TouchableOpacity
        onPress={onPress}
        style={[styles.container, style]}
        activeOpacity={0.8}
      >
        {children}
      </TouchableOpacity>
    )
  }
}

Card.propTypes = {
  onPress: PropTypes.func,
  style: PropTypes.number,
  children: PropTypes.node.isRequired,
}

Card.defaultProps = {
  onPress: null,
  style: null,
}

export default Card
