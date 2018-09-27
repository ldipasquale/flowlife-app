import React from 'react'
import { withNavigation } from 'react-navigation'

import { View, Text } from 'react-native'
import { App, Card } from '@components'

import screens from '@screens'

class SignIn extends React.PureComponent {
  static label = screens.SIGN_IN

  render() {
    return (
      <App disableHeader disableManager>
        <View>
          <Card onPress={() => this.props.navigation.navigate(screens.SIGN_UP)}>
            <Text>Registrate</Text>
          </Card>
        </View>
      </App>
    )
  }
}

export default withNavigation(SignIn)
