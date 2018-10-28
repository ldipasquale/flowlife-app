import { connect } from 'react-redux'

import StoreService from '@services/Store'
import { makeAction } from '@store/actions'

import { Toast } from '@navigation'

import Layout from './Layout'

const mapStateToProps = state => ({
  money: state.user.wallet.cash,
  creditCardBalance: state.user.credit_card.next_closure_balance,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onBuyItem: async ({ item, paymentMethod }) => {
    const { navigation } = ownProps

    try {
      const response = await StoreService.buy({
        item,
        paymentMethod,
      })

      dispatch(makeAction({ navigation, response }))
    } catch (error) {
      Toast.show('Oops. Ocurrió un error.')
    }
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(Layout)
