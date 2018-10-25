import React from 'react'

import { App } from '@components'
import assets from '@assets'
import screens from '@screens'

import Stats from './Stats'
import Menu from './Menu'

class Home extends React.PureComponent {
  static navigationOptions = {
    label: screens.HOME,
    icon: assets.shop,
  }

  render() {
    return (
      <App>
        <Stats />
        <Menu />
      </App>
    )
  }
}

export default Home
