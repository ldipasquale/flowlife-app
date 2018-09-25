import React from 'react'

import { View } from 'react-native'
import { Title, Value } from '@components'

import { colors } from '@stylesheets'

import styles from './styles'

const color = colors.GREEN

class StatsMoney extends React.PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <Title color={color}>Dinero</Title>
        <Value color={color}>$2.030</Value>
      </View>
    )
  }
}

export default StatsMoney
