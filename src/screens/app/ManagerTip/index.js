import { connect } from 'react-redux'

import { popTip } from '@store/managerTips/actions'

import Layout from './Layout'

const mapStateToProps = state => ({
  isLastTip: state.managerTips.length === 1,
  tip: state.managerTips[state.managerTips.length - 1],
})

const mapDispatchToProps = {
  onShowNextTip: popTip,
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout)
