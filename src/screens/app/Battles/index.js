import { createStackNavigator } from '@navigation'

import assets from '@assets'
import { colors } from '@stylesheets'
import screens from '@screens/list'

import AllBattles from './AllBattles'
import Battle from './Battle'

export default createStackNavigator([AllBattles, Battle], {
  screenOptions: {
    label: screens.BATTLES,
    icon: assets.battles,
    color: colors.ORANGE,
  },
})
