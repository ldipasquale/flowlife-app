import React from 'react'
import PropTypes from 'prop-types'

import { withNavigation } from '@navigation'

import { App } from '@components'

import assets from '@assets'
import screens from '@screens/list'

import Stats from './Stats'
import Menu from './Menu'
import Relax from './Relax'

class Home extends React.PureComponent {
  static screenOptions = {
    label: screens.HOME,
    icon: assets.shop,
  }

  componentDidMount() {
    const { hasManagerTips, navigation } = this.props

    if (hasManagerTips) {
      navigation.navigate(screens.MANAGER_TIP)
    }
  }

  render() {
    const { user } = this.props

    return (
      <App>
        <Stats
          money={user.wallet.cash}
          flow={user.flow}
          fans={user.fans}
          week={user.week}
        />

        <Menu />

        <Relax />
      </App>
    )
  }
}

Home.propTypes = {
  navigation: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  hasManagerTips: PropTypes.bool.isRequired,
}

export default withNavigation(Home)
