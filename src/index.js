import React from 'react'

import { AsyncStorage, View } from 'react-native'
import { Spinner } from '@components'

import { createRootNavigator } from '@navigation'

import screens from '@screens'
import App from '@screens/app'
import Auth from '@screens/auth'

class Skeleton extends React.PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      isFetching: true,
      isSignedIn: false,
    }
  }

  async componentDidMount() {
    const isSignedIn = await AsyncStorage.getItem('email') !== null

    return this.setState({
      isFetching: false,
      isSignedIn,
    })
  }

  render() {
    const { isFetching, isSignedIn } = this.state

    if (isFetching) {
      return (
        <View style={{ flex: 1 }}>
          <Spinner />
        </View>
      )
    }

    const Layout = createRootNavigator({
      auth: {
        id: screens.AUTH,
        Screen: Auth,
      },
      app: {
        id: screens.APP,
        Screen: App,
      },
    })(isSignedIn)

    return (
      <Layout />
    )
  }
}

export default Skeleton
