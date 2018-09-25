import React from 'react'

import { View } from 'react-native'
import { Card } from '@components'

import Money from './Money'
import Level from './Level'
import Flow from './Flow'

import styles from './styles'

class Stats extends React.PureComponent {
  render() {
    return (
      <Card>
        <View style={[styles.row, styles.firstRow]}>
          <View style={styles.moneyContainer}>
            <Money />
          </View>

          <View style={styles.levelContainer}>
            <Level />
          </View>
        </View>

        <View style={styles.row}>
          <Flow />
        </View>
      </Card>
    )
  }
}

export default Stats
