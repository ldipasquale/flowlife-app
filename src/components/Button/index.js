import React from 'react'
import PropTypes from 'prop-types'

import { TouchableOpacity, View, Text } from 'react-native'

import styles from './styles'

class Button extends React.PureComponent {
  constructor(props) {
    super(props)

    this.getContainerProps = this.getContainerProps.bind(this)
    this.renderContent = this.renderContent.bind(this)
  }

  getContainerProps() {
    const { color } = this.props

    return {
      style: [
        styles.container,
        color !== null && {
          backgroundColor: color,
        },
      ],
    }
  }

  renderContent() {
    const { children } = this.props

    return (
      <Text style={styles.text}>
        {children.toUpperCase()}
      </Text>
    )
  }

  render() {
    const { onPress } = this.props

    if (onPress) {
      return (
        <TouchableOpacity
          {...this.getContainerProps()}
          onPress={onPress}
          activeOpacity={0.8}
        >
          {this.renderContent()}
        </TouchableOpacity>
      )
    }

    return (
      <View {...this.getContainerProps()}>
        {this.renderContent()}
      </View>
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
