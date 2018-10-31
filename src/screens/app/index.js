import { createDrawerNavigator, createModalScreen } from '@navigation'

import Home from './Home'
import Battles from './Battles'
import Shop from './Shop'
import Investments from './Investments'
import Bank from './Bank'
import Manager from './Manager'
import Ranking from './Ranking'
import ManagerTip from './ManagerTip'

export default createModalScreen(
  createDrawerNavigator([Home, Battles, Shop, Investments, Bank, Manager, Ranking]),
  [ManagerTip],
)
