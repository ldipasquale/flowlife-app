import React from 'react'
import PropTypes from 'prop-types'

import { FlatList } from 'react-native'
import { App, Card, Arena, Spinner } from '@components'

import { withNavigation } from '@navigation'

import screens from '@screens/list'

class AllBattles extends React.PureComponent {
  static screenOptions = {
    id: screens.BATTLES,
  }

  static entities = ['arenas']

  static getKey(arena) {
    return arena.name
  }

  constructor(props) {
    super(props)

    this.renderArena = this.renderArena.bind(this)
  }

  renderArena({ item }) {
    const { navigation, money } = this.props

    return (
      <Card
        onPress={() => navigation.navigate(screens.BATTLE, { arena: item })}
        isDisabled={money < item.cost}
      >
        <Arena
          name={item.name}
          capacity={item.capacity}
          cost={item.cost}
        />
      </Card>
    )
  }

  render() {
    const { arenas, isFetching } = this.props

    return (
      <App>
        {isFetching ? (
          <Spinner />
        ) : (
          <FlatList
            data={arenas}
            renderItem={this.renderArena}
            keyExtractor={AllBattles.getKey}
          />
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
