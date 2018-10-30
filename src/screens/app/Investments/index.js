import { connect } from 'react-redux'

import Layout from './Layout'

const mapStateToProps = state => ({
  userInvestments: user.investments,
})

export default connect(mapStateToProps)(Layout)
