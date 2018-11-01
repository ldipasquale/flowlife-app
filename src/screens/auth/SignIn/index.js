import { connect } from 'react-redux'
import { AsyncStorage } from 'react-native'

import screens from '@screens/list'
import { Toast } from '@navigation'

import UsersService from '@services/Users'
import { makeAction } from '@store/actions'

import Layout from './Layout'

const mapDispatchToProps = (dispatch, ownProps) => ({
  onSubmit: async (values) => {
    const { navigation } = ownProps

    try {
      const isSignedIn = await UsersService.signIn(values)

      if (isSignedIn) {
        await AsyncStorage.setItem('email', values.email)

        const response = await UsersService.get(values.email)

        dispatch(makeAction({ response }))

        navigation.navigate(screens.APP)
      } else {
        Toast.show('No encontramos al usuario. Por favor, intenta de nuevo.')
      }
    } catch (error) {
      Toast.show('Oops. Ocurrió un error.')
    }
  },
})

export default connect(null, mapDispatchToProps)(Layout)
