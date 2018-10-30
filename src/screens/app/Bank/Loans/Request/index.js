import { connect } from 'react-redux'

import BankService from '@services/Bank'
import { makeAction } from '@store/actions'

import { Toast } from '@navigation'

import Layout from './Layout'

const mapDispatchToProps = (dispatch, ownProps) => ({
  onRequest: async ({ amount, duration, interestRate }) => {
    const { navigation } = ownProps

    try {
      const response = await BankService.requestLoan({ amount, duration, interestRate })

      dispatch(makeAction({ navigation, response }))
    } catch (error) {
      Toast.show('Oops. Ocurrió un error.')
    }
  },
})

export default connect(null, mapDispatchToProps)(Layout)
