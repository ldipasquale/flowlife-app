import React from 'react'
import { Image } from 'react-native'

import { createDrawerNavigator } from 'react-navigation'

import screens from '../'

import Home from './Home'
import Battles from './Battles'
import Shop from './Battles'
import Investments from './Battles'

export default createDrawerNavigator({
  [screens.HOME]: Home,
  [screens.BATTLES]: Battles,
  [screens.SHOP]: Shop,
  [screens.INVESTMENTS]: Investments,
})
