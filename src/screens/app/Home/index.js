import { connect } from 'react-redux'

import Layout from './Layout'

const mapStateToProps = state => ({
  user: state.user,
})

export default connect(mapStateToProps)(Layout)
