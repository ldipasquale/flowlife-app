import React from 'react'

import { View, Text } from 'react-native'
import { App, Card } from '@components'

import assets from '@assets'
import { colors } from '@stylesheets'

import screens from '@screens'

class Investments extends React.PureComponent {
  static navigationOptions = {
    label: screens.INVESTMENTS,
    icon: assets.investments,
    color: colors.BLUE,
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

export default Investments
