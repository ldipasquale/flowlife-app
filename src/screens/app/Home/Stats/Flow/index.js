import React from 'react'

import { View } from 'react-native'
import { Title } from '@components'

import { colors } from '@stylesheets'

import styles from './styles'

const color = colors.ORANGE

const value = 0.7

class StatsFlow extends React.PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <Title color={color}>Flow</Title>

        <View style={styles.flowBar}>
          <View
            style={[styles.flowValue, {
              flex: value,
            }]}
          />
        </View>
      </View>
    )
  }
}

export default StatsFlow
