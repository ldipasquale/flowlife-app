import { createStackNavigator as rawCreateStackNavigator } from 'react-navigation'

import processScreens from './processScreens'

export default (Screens, Config = {}) => {
  const StackNavigator = rawCreateStackNavigator(processScreens(Screens), {
    headerMode: 'none',
    ...Config,
  })

  if (Config.screenOptions) {
    StackNavigator.screenOptions = Config.screenOptions
  }

  return StackNavigator
}
