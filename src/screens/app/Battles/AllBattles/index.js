import React from 'react'
import PropTypes from 'prop-types'

import { App, Card, Arena, Spinner } from '@components'

import { withNavigation } from '@navigation'

import screens from '@screens'

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
    const { navigation } = this.props

    return (
      <Card
        key={arena.name}
        onPress={() => navigation.navigate(screens.BATTLE, { arena })}
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
  isFetching: PropTypes.bool,
  arenas: PropTypes.array,
  navigation: PropTypes.object.isRequired,
}

AllBattles.defaultProps = {
  isFetching: true,
  arenas: [],
}

export default withNavigation(AllBattles)
