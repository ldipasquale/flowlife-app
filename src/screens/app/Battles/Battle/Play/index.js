import { connect } from 'react-redux'

import { Toast } from '@navigation'
import { makeAction } from '@store/actions'

import BattlesService from '@services/Battles'

import Layout from './Layout'

const mapDispatchToProps = (dispatch, ownProps) => ({
  onFinish: async (hasWin) => {
    const { navigation } = ownProps
    const { arena } = navigation.state.params

    try {
      const response = await BattlesService.win({
        win: hasWin,
        arena,
      })

      navigation.goBack()

      dispatch(makeAction({ navigation, response }))
    } catch (error) {
      Toast.show('Oops. Ocurrió un error.')
    }
  },
})

export default connect(null, mapDispatchToProps)(Layout)
