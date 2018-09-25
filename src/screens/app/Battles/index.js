import React from 'react'

import { View, Text } from 'react-native'
import { App, Card } from '@components'

import assets from '@assets'
import { colors } from '@stylesheets'

import screens from '@screens'

class Battles extends React.PureComponent {
  static label = screens.BATTLES

  static icon = assets.battles

  static color = colors.ORANGE

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

export default Battles
