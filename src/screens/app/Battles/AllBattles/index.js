import { connect } from 'react-redux'

import Layout from './Layout'

const mapStateToProps = state => ({
  money: state.user.wallet.cash,
})

export default connect(mapStateToProps)(Layout)
