import React from 'react'
import { Image } from 'react-native'
import { createDrawerNavigator } from 'react-navigation'

import { Sidebar } from '@components'

import Home from './Home'
import Battles from './Battles'
import Shop from './Shop'
import Investments from './Investments'

const screensList = [Home, Battles, Shop, Investments]

const navigatorItems = screensList.reduce((screensAccumulator, Screen) => {
  let ProcessedScreen = Screen

  ProcessedScreen.navigationOptions = {
    drawerIcon: () => (
      <Image
        source={Screen.icon}
        style={{
          width: 20,
          height: 20,
          resizeMode: 'contain',
        }}
      />
    ),
  }

  return {
    ...screensAccumulator,
    [Screen.label]: ProcessedScreen,
  }
}, {})

export default createDrawerNavigator(navigatorItems, {
  contentComponent: Sidebar,
})
