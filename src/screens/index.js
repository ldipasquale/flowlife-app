import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { AsyncStorage, View } from 'react-native'
import { Spinner } from '@components'

import { createRootNavigator } from '@navigation'

import UsersService from '@services/Users'
import { makeAction } from '@store/actions'

import screens from '@screens/list'
import AppScreen from '@screens/app'
import AuthScreen from '@screens/auth'

class Skeleton extends React.PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      isFetching: true,
      isSignedIn: false,
    }
  }

  async componentDidMount() {
    const { onSaveUser } = this.props

    const userEmail = await AsyncStorage.getItem('email')
    const isSignedIn = userEmail !== null

    if (isSignedIn) {
      const response = await UsersService.get(userEmail)

      onSaveUser(response)
    }

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
        Screen: AuthScreen,
      },
      app: {
        id: screens.APP,
        Screen: AppScreen,
      },
    })(isSignedIn)

    return (
      <Layout />
    )
  }
}

Skeleton.propTypes = {
  onSaveUser: PropTypes.func.isRequired,
}

const mapDispatchToProps = dispatch => ({
  onSaveUser(response) {
    dispatch(makeAction({ response }))
  },
})

export default connect(null, mapDispatchToProps)(Skeleton)
