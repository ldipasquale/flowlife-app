import React from 'react'

import { View } from 'react-native'
import { Title, Value } from '@components'

import { colors } from '@stylesheets'

import styles from './styles'

const color = colors.BLUE

class StatsLevel extends React.PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <Title
          style={styles.text}
          color={color}
        >
          Nivel
        </Title>

        <Value
          style={styles.text}
          color={color}
        >
          21
        </Value>
      </View>
    )
  }
}

export default StatsLevel
