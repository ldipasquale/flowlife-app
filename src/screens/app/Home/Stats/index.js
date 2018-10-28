import React from 'react'
import PropTypes from 'prop-types'

import { View } from 'react-native'
import { Card } from '@components'

import Money from './Money'
import Fans from './Fans'
import Flow from './Flow'

import styles from './styles'

class Stats extends React.PureComponent {
  render() {
    const { money, fans, flow } = this.props

    return (
      <Card>
        <View style={[styles.row, styles.firstRow]}>
          <View style={styles.moneyContainer}>
            <Money value={money} />
          </View>

          <View style={styles.levelContainer}>
            <Fans value={fans} />
          </View>
        </View>

        <View style={styles.row}>
          <Flow value={flow} />
        </View>
      </Card>
    )
  }
}

Stats.propTypes = {
  money: PropTypes.number.isRequired,
  fans: PropTypes.number.isRequired,
  flow: PropTypes.number.isRequired,
}

export default Stats
