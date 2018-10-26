import React from 'react'
import PropTypes from 'prop-types'

import { View, Text } from 'react-native'

import styles from './styles'

class Bullet extends React.PureComponent {
  render() {
    const { title, children } = this.props

    return (
      <View style={styles.container}>
        <View style={styles.bullet} />
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.content}>
:
          {children}
        </Text>
      </View>
    )
  }
}

Bullet.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export default Bullet
