import React from 'react'

import { View, Text } from 'react-native'
import { App, Card } from '@components'

import assets from '@assets'
import { colors } from '@stylesheets'

import screens from '@screens'

class Shop extends React.PureComponent {
  static navigationOptions = {
    label: screens.SHOP,
    icon: assets.shop,
    color: colors.GREEN,
  }

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
