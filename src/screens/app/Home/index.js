import { connect } from 'react-redux'

import Layout from './Layout'

const mapStateToProps = state => ({
  user: state.user,
  hasManagerTips: state.managerTips.length > 0,
})

export default connect(mapStateToProps)(Layout)
