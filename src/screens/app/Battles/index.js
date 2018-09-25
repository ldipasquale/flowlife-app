import React from 'react'

import { View, Text, Image } from 'react-native'
import { App, Card } from '@components'

import { colors } from '@stylesheets'

import screens from '@screens'

class Battles extends React.PureComponent {
  static label = screens.BATTLES
  static icon = require('@assets/icons/battles.png')
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
