import React from 'react'
import { Image } from 'react-native'

import { createDrawerNavigator as rawCreateDrawerNavigator } from 'react-navigation'

import processScreens from './processScreens'

export default (Screens, Config) => (
  rawCreateDrawerNavigator(processScreens(Screens, Screen => {
    Screen.navigationOptions = { // eslint-disable-line no-param-reassign
      drawerIcon: () => (
        <Image
          source={Screen.screenOptions.icon}
          style={{
            width: 20,
            height: 20,
            resizeMode: 'contain',
          }}
        />
      ),
    }

    return Screen
  }), Config)
)
