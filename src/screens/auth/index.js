import React from 'react'
import { createStackNavigator } from 'react-navigation'

import SignUp from './SignUp'
import SignIn from './SignIn'

const screensList = [SignUp, SignIn]

const navigatorItems = screensList.reduce((screensAccumulator, Screen) => ({
  ...screensAccumulator,
  [Screen.label]: Screen,
}), {})

export default createStackNavigator(navigatorItems, {
  headerMode: 'none',
  initialRouteName: SignIn.label,
})
