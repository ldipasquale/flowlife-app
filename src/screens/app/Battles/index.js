import React from 'react'
import numeral from 'numeral'

import { View, Text } from 'react-native'
import { App, Card, Title, Value, Spinner } from '@components'

import assets from '@assets'
import { colors } from '@stylesheets'
import { formats } from '@constants'

import screens from '@screens'

import styles from './styles'

class Battles extends React.PureComponent {
  static label = screens.BATTLES

  static icon = assets.battles

  static color = colors.ORANGE

  static entities = ['arenas']

  static renderArena(arena) {
    return (
      <Card key={arena.name}>
        <View style={styles.arenaContainer}>
          <View>
            <Text>{arena.name}</Text>

            <Value
              color={colors.GREEN}
              size="small"
            >
              {numeral(arena.cost).format(formats.CURRENCY)}
            </Value>
          </View>

          <View style={styles.arenaCapacityContainer}>
            <Value
              color={colors.BLUE}
              size="small"
            >
              {numeral(arena.capacity).format()}
            </Value>

            <Title color={colors.BLUE}>Capacidad</Title>
          </View>
        </View>
      </Card>
    )
  }

  render() {
    const { arenas, isFetching } = this.props

    return (
      <App>
        {!isFetching ? arenas.map(Battles.renderArena) : (
          <Spinner />
        )}
      </App>
    )
  }
}

export default Battles
