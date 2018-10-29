import { createDrawerNavigator, createModalScreen } from '@navigation'

import { Sidebar } from '@components'

import Home from './Home'
import Battles from './Battles'
import Shop from './Shop'
import Investments from './Investments'
import ManagerTip from './ManagerTip'

export default createModalScreen(createDrawerNavigator([Home, Battles, Shop, Investments], {
  contentComponent: Sidebar,
}), [ManagerTip])
