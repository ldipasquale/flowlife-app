import React from 'react'
import PropTypes from 'prop-types'

import { TouchableOpacity, View } from 'react-native'
import { Title } from '@components'

import { colors } from '@stylesheets'

import styles from './styles'

class Card extends React.PureComponent {
  constructor(props) {
    super(props)

    this.renderContent = this.renderContent.bind(this)
  }

  renderContent() {
    const { title, children } = this.props

    if (title === null) {
      return children
    }

    return (
      <React.Fragment>
        <Title
          style={styles.title}
          color={colors.GRAY}
        >
          {title}
        </Title>

        {children}
      </React.Fragment>
    )
  }

  render() {
    const { style, onPress, isDisabled } = this.props

    if (onPress === null || isDisabled) {
      return (
        <View
          style={[
            styles.container,
            style,
            isDisabled && styles.disabledContainer,
          ]}
        >
          {this.renderContent()}
        </View>
      )
    }

    return (
      <TouchableOpacity
        onPress={onPress}
        style={[styles.container, style]}
        activeOpacity={0.8}
      >
        {this.renderContent()}
      </TouchableOpacity>
    )
  }
}

Card.propTypes = {
  title: PropTypes.string,
  onPress: PropTypes.func,
  style: PropTypes.number,
  children: PropTypes.node.isRequired,
  isDisabled: PropTypes.bool,
}

Card.defaultProps = {
  title: null,
  onPress: null,
  style: null,
  isDisabled: false,
}

export default Card
