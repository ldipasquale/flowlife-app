import { connect } from 'react-redux'

import { Toast } from '@navigation'

import BattlesService from '@services/Battles'

import Layout from './Layout'

const mapDispatchToProps = (dispatch, ownProps) => ({
  onWin: async () => {
    const { navigation } = ownProps

    try {
      const response = await BattlesService.win({
        arena: {
          name: 'Charo',
        },
      })

      console.log(response)

      Toast.show('Bien!.')
    } catch (error) {
      Toast.show('Oops. Ocurrió un error.')
    }
  },
})

export default connect(null, mapDispatchToProps)(Layout)
