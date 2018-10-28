import { connect } from 'react-redux'
import { AsyncStorage } from 'react-native'

import screens from '@screens/list'
import { Toast } from '@navigation'

import UsersService from '@services/Users'
import { saveUser } from '@store/user/actions'

import Layout from './Layout'

const mapDispatchToProps = (dispatch, ownProps) => ({
  onSubmit: async (values) => {
    const { navigation } = ownProps

    try {
      const isSignedIn = await UsersService.signIn(values)

      if (isSignedIn) {
        await AsyncStorage.setItem('email', values.email)

        const user = await UsersService.get(values.email)

        dispatch(saveUser(user))

        navigation.navigate(screens.APP)
      } else {
        Toast.show('No encontramos al usuario. Por favor, intenta de nuevo.')
      }
    } catch (error) {
      console.log(error)
      Toast.show('Oops. Ocurrió un error.')
    }
  }
})

export default connect(null, mapDispatchToProps)(Layout)