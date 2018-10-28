import { connect } from 'react-redux'

import InvestmentsService from '@services/Investments'
import { makeAction } from '@store/actions'

import { Toast } from '@navigation'

import Layout from './Layout'

const mapStateToProps = state => ({
  money: state.user.wallet.cash,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onBuyItem: async ({ item }) => {
    const { navigation } = ownProps

    try {
      const response = await InvestmentsService.invest({
        type: item.name,
      })

      dispatch(makeAction({
        navigation,
        response,
        showManagerTip: true,
      }))
    } catch (error) {
      Toast.show('Oops. Ocurrió un error.')
    }
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(Layout)
