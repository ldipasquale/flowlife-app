import React from 'react'

import { View } from 'react-native'
import { Card } from '@components'

import Money from './Money'
import Fans from './Fans'
import Flow from './Flow'

import styles from './styles'

class Stats extends React.PureComponent {
  render() {
    return (
      <Card>
        <View style={[styles.row, styles.firstRow]}>
          <View style={styles.moneyContainer}>
            <Money value={2030} />
          </View>

          <View style={styles.levelContainer}>
            <Fans value={18} />
          </View>
        </View>

        <View style={styles.row}>
          <Flow value={0.5} />
        </View>
      </Card>
    )
  }
}

export default Stats
