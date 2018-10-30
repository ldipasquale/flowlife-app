import React from 'react'
import PropTypes from 'prop-types'

import { App } from '@components'

import { createTabNavigator } from '@navigation'

import screens from '@screens/list'
import assets from '@assets'

import createScreen from './createScreen'

const FansScreen = createScreen({ label: screens.FANS })
const FlowScreen = createScreen({ label: screens.FLOW })
const MoneyScreen = createScreen({ label: screens.MONEY })

const createTab = Screen => ({ items, isFetching }) => {
  const TabScreen = () => (
    <Screen
      items={items}
      isFetching={isFetching}
    />
  )

  TabScreen.screenOptions = Screen.screenOptions

  return TabScreen
}

class Ranking extends React.PureComponent {
  static screenOptions = {
    label: screens.RANKING,
    icon: assets.ranking,
  }

  static entities = ['ranking']

  render() {
    const { isFetching, ranking } = this.props

    const FansTab = createTab(FansScreen)({
      isFetching,
      items: ranking.fans,
    })

    const FlowTab = createTab(FlowScreen)({
      isFetching,
      items: ranking.flow,
    })

    const MoneyTab = createTab(MoneyScreen)({
      isFetching,
      items: ranking.money,
    })

    const TabsNavigator = createTabNavigator([FansTab, FlowTab, MoneyTab])

    return (
      <App withPadding={false}>
        <TabsNavigator />
      </App>
    )
  }
}

Ranking.propTypes = {
  isFetching: PropTypes.bool,
  ranking: PropTypes.object,
}

Ranking.defaultProps = {
  isFetching: true,
  ranking: {
    fans: [],
    flow: [],
    money: [],
  },
}

export default Ranking
