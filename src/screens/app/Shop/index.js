import React from 'react'

import { View, Text, Image } from 'react-native'
import { App, Card } from '@components'

import { colors } from '@stylesheets'

import screens from '@screens'

class Shop extends React.PureComponent {
  static label = screens.SHOP
  static icon = require('@assets/icons/shop.png')
  static color = colors.GREEN

  render() {
    return (
      <App>
        <View>
          <Card>
            <Text>asdfsssasdf</Text>
          </Card>
        </View>
      </App>
    )
  }
}

export default Shop
