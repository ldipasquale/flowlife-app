import { createMaterialTopTabNavigator as rawCreateMaterialTopTabNavigator } from 'react-navigation'

import processScreens from './processScreens'

import styles from './Tabs/styles'

export default (Screens, Config = {}) => {
  const TabsNavigator = rawCreateMaterialTopTabNavigator(processScreens(Screens), {
    tabBarOptions: styles,
    ...Config,
  })

  if (Config.screenOptions) {
    TabsNavigator.screenOptions = Config.screenOptions
  }

  return TabsNavigator
}
