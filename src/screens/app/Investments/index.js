import React from 'react'

import { View, Text, Image } from 'react-native'
import { App, Card } from '@components'

import { colors } from '@stylesheets'

import screens from '@screens'

class Investments extends React.PureComponent {
  static label = screens.INVESTMENTS
  static icon = require('@assets/icons/investments.png')
  static color = colors.BLUE

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

export default Investments
