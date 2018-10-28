import React from 'react'
import PropTypes from 'prop-types'

import { App } from '@components'
import assets from '@assets'
import screens from '@screens/list'

import Stats from './Stats'
import Menu from './Menu'

class Home extends React.PureComponent {
  static screenOptions = {
    label: screens.HOME,
    icon: assets.shop,
  }

  render() {
    const { user } = this.props

    return (
      <App>
        <Stats
          money={user.wallet.cash}
          flow={user.flow}
          fans={user.fans}
        />

        <Menu />
      </App>
    )
  }
}

Home.propTypes = {
  user: PropTypes.object.isRequired,
}

export default Home
