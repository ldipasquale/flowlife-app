import React from 'react'

import { View, Text, Image } from 'react-native'
import { App, Card, Title } from '@components'

import screens from '@screens'

import Stats from './Stats'
import Menu from './Menu'

class Home extends React.PureComponent {
  static navigationOptions = {
    drawerIcon: ({ tintColor }) => (
      <Image
        style={{tintColor}}
      />
    ),
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
