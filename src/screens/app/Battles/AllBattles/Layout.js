import React from 'react'
import PropTypes from 'prop-types'

import { App, Card, Arena, Spinner } from '@components'

import { withNavigation } from '@navigation'

import screens from '@screens/list'

class AllBattles extends React.PureComponent {
  static screenOptions = {
    id: screens.BATTLES,
  }

  static entities = ['arenas']

  constructor(props) {
    super(props)

    this.renderArena = this.renderArena.bind(this)
  }

  renderArena(arena) {
    const { navigation, money } = this.props

    return (
      <Card
        key={arena.name}
        onPress={() => navigation.navigate(screens.BATTLE, { arena })}
        isDisabled={money < arena.cost}
      >
        <Arena
          name={arena.name}
          capacity={arena.capacity}
          cost={arena.cost}
        />
      </Card>
    )
  }

  render() {
    const { arenas, isFetching } = this.props

    return (
      <App>
        {!isFetching ? arenas.map(this.renderArena) : (
          <Spinner />
        )}
      </App>
    )
  }
}

AllBattles.propTypes = {
  money: PropTypes.number.isRequired,
  isFetching: PropTypes.bool,
  arenas: PropTypes.array,
  navigation: PropTypes.object.isRequired,
}

AllBattles.defaultProps = {
  isFetching: true,
  arenas: [],
}

export default withNavigation(AllBattles)
