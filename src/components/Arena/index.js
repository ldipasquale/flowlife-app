import React from 'react'
import PropTypes from 'prop-types'
import numeral from 'numeral'

import { View, Text } from 'react-native'
import { Title, Value } from '@components'

import { colors } from '@stylesheets'
import { formats } from '@constants'

import styles from './styles'

class Arena extends React.PureComponent {
  render() {
    const { name, cost, capacity } = this.props

    return (
      <View style={styles.container}>
        <View>
          <Text>{name}</Text>

          <Value
            color={colors.GREEN}
            size="small"
          >
            {numeral(cost).format(formats.CURRENCY)}
          </Value>
        </View>

        <View style={styles.capacityContainer}>
          <Value
            color={colors.BLUE}
            size="small"
          >
            {numeral(capacity).format()}
          </Value>

          <Title color={colors.BLUE}>Capacidad</Title>
        </View>
      </View>
    )
  }
}

Arena.propTypes = {
  name: PropTypes.string.isRequired,
  cost: PropTypes.number.isRequired,
  capacity: PropTypes.number.isRequired,
}

export default Arena
