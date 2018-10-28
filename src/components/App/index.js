import { connect } from 'react-redux'

import Layout from './Layout'

const mapStateToProps = state => {
  console.log(state.managerTips)
  
  return {
    avatarUrl: 'https://banner2.kisspng.com/20180616/gks/kisspng-roblox-avatar-rapper-clip-art-cadea-carbonada-5b255cb41c2623.2620842815291752201153.jpg',
    disableManager: state.managerTips.length === 0,
  }
}

export default connect(mapStateToProps)(Layout)
