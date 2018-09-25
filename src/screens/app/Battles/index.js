import React from 'react'

import { View, Text, Image } from 'react-native'
import { App, Card } from '@components'

import screens from '@screens'

class Battles extends React.PureComponent {
  static navigationOptions = {
    drawerIcon: ({ tintColor }) => (
      <Image
        style={{tintColor}}
      />
    ),
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

export default Battles
