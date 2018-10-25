import { createStackNavigator as rawCreateStackNavigator } from 'react-navigation'

import processScreens from './processScreens'

export default (Screens, Config = {}) => {
  const StackNavigator = rawCreateStackNavigator(processScreens(Screens), {
    headerMode: 'none',
    ...Config,
  })

  if (Config.navigationOptions) {
    StackNavigator.navigationOptions = Config.navigationOptions
  }

  return StackNavigator
}
