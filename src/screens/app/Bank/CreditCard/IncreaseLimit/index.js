import { connect } from 'react-redux'

import BankService from '@services/Bank'
import { makeAction } from '@store/actions'

import { Toast } from '@navigation'

import Layout from './Layout'

const mapDispatchToProps = (dispatch, ownProps) => ({
  onIncrease: async ({ amount }) => {
    const { navigation } = ownProps

    try {
      const response = await BankService.increaseCreditCardLimit({ amount })

      dispatch(makeAction({ navigation, response }))
    } catch (error) {
      Toast.show('Oops. Ocurrió un error.')
    }
  },
})

export default connect(null, mapDispatchToProps)(Layout)
