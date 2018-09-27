import React from 'react'

import { View, Text } from 'react-native'
import { App, Card } from '@components'

import screens from '@screens'

class SignUp extends React.PureComponent {
  static label = screens.SIGN_UP

  render() {
    return (
      <App
        leftIcon="back"
        getOnPressLeftIcon={navigation => () => navigation.goBack(null)}
        disableManager
      >
        <View>
          <Card>
            <Text>Logueate</Text>
          </Card>
        </View>
      </App>
    )
  }
}

export default SignUp
