import { connect } from 'react-redux'

import UsersService from '@services/Users'
import { makeAction } from '@store/actions'

import { Toast, withNavigation } from '@navigation'

import Layout from './Layout'

const mapDispatchToProps = (dispatch, ownProps) => ({
  onRelax: async () => {
    const { navigation } = ownProps

    try {
      const response = await UsersService.relax()

      dispatch(makeAction({ navigation, response }))
    } catch (error) {
      Toast.show('Oops. Ocurrió un error.')
    }
  },
})

export default withNavigation(connect(null, mapDispatchToProps)(Layout))
