import { createStackNavigator } from '@navigation'

import assets from '@assets'
import { colors } from '@stylesheets'
import screens from '@screens'

import AllBattles from './AllBattles'
import Battle from './Battle'

export default createStackNavigator([Battle, AllBattles], {
  navigationOptions: {
    label: screens.BATTLES,
    icon: assets.battles,
    color: colors.ORANGE,
  },
})
