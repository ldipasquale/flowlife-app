import { connect } from 'react-redux'

import { popTip } from '@store/managerTips/actions'

import Layout from './Layout'

const mapStateToProps = state => ({
  tip: state.managerTips[state.managerTips.length - 1],
})

const mapDispatchToProps = {
  onClose: popTip,
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout)
