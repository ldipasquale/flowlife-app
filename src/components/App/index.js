import { connect } from 'react-redux'

import Layout from './Layout'

const mapStateToProps = state => ({
  avatarUrl: state.user.avatar,
  disableManager: state.managerTips.length === 0,
})

export default connect(mapStateToProps)(Layout)
