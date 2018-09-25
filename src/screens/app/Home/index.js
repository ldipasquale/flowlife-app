import React from 'react'

import { View, Text, Image } from 'react-native'
import { App, Card, Title } from '@components'

import screens from '@screens'

import Stats from './Stats'
import Menu from './Menu'

class Home extends React.PureComponent {
  static label = screens.HOME
  static icon = require('@assets/icons/shop.png')

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
