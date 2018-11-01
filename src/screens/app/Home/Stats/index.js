import React from 'react'
import PropTypes from 'prop-types'

import { View } from 'react-native'
import { Card } from '@components'

import Money from './Money'
import Week from './Week'
import Flow from './Flow'
import Fans from './Fans'

import styles from './styles'

class Stats extends React.PureComponent {
  render() {
    const { money, fans, flow, week } = this.props

    const firstRowSize = money > 99999 ? 'small' : 'standard'

    return (
      <Card>
        <View style={[styles.row, styles.firstRow]}>
          <View style={styles.firstColumn}>
            <Money
              value={money}
              size={firstRowSize}
            />
          </View>

          <View style={styles.secondColumn}>
            <Week
              value={week}
              size={firstRowSize}
            />
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.firstColumn}>
            <Flow value={flow} />
          </View>

          <View style={styles.secondColumn}>
            <Fans value={fans} />
          </View>
        </View>
      </Card>
    )
  }
}

Stats.propTypes = {
  money: PropTypes.number.isRequired,
  fans: PropTypes.number.isRequired,
  flow: PropTypes.number.isRequired,
  week: PropTypes.number.isRequired,
}

export default Stats
