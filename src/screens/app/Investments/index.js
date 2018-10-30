import { connect } from 'react-redux'

import Layout from './Layout'

const mapStateToProps = state => ({
  userInvestments: state.user.investments,
})

export default connect(mapStateToProps)(Layout)
