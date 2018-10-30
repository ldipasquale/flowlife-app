import React from 'react'
import PropTypes from 'prop-types'

import { View, Text } from 'react-native'

import styles from './styles'

class Bullet extends React.PureComponent {
  constructor(props) {
    super(props)

    this.renderContent = this.renderContent.bind(this)
  }

  renderContent() {
    const { children, withColon } = this.props

    if (!withColon) {
      return children
    }

    return `: ${children}`
  }

  render() {
    const { style, title, children, rightNode } = this.props

    return (
      <View
        style={[
          styles.container,
          style !== -1 && style,
        ]}
      >
        <View style={styles.bullet} />

        <Text style={styles.textContainer}>
          {title && (
            <Text style={styles.title}>{title}</Text>
          )}

          <Text>{this.renderContent()}</Text>
        </Text>

        {rightNode && (
          <View style={styles.rightNodeContainer}>
            {rightNode}
          </View>
        )}
      </View>
    )
  }
}

Bullet.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
  style: PropTypes.number,
  withColon: PropTypes.bool,
  rightNode: PropTypes.node,
}

Bullet.defaultProps = {
  title: null,
  style: -1,
  withColon: true,
  rightNode: null,
}

export default Bullet
