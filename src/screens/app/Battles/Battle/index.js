import React from 'react'
import PropTypes from 'prop-types'
import { withNavigation } from 'react-navigation'
import numeral from 'numeral'

import { App, Card, Arena, Bullet, Button } from '@components'

import { formats } from '@constants'
import { colors } from '@stylesheets'

import screens from '@screens'

import Play from './Play'

class Battle extends React.PureComponent {
  static screenOptions = {
    label: screens.BATTLE,
    modals: [Play],
  }

  render() {
    const { navigation } = this.props

    // const { arena } = navigation.state.params

    const arena = {
      name: 'Bitflow',
      capacity: 200,
      cost: 30940,
    }

    return (
      <App leftIcon="back">
        <Card title="Arena">
          <Arena
            name={arena.name}
            capacity={arena.capacity}
            cost={arena.cost}
          />
        </Card>

        <Card title="Condiciones">
          <Bullet title="Entrada">{numeral(arena.cost).format(formats.CURRENCY)}</Bullet>
          <Bullet title="Premio">
            {arena.capacity}
            {' '}
fans nuevos
          </Bullet>
          <Bullet title="Tipo de Concierto">Punchline Mode</Bullet>
        </Card>

        <Button
          onPress={() => navigation.navigate(screens.PLAY_BATTLE, { arena })}
          color={colors.ORANGE}
        >
          Comenzar concierto
        </Button>
      </App>
    )
  }
}

Battle.propTypes = {
  navigation: PropTypes.object.isRequired,
}

Battle.defaultProps = {
}

export default withNavigation(Battle)
