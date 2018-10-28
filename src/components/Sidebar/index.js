import { connect } from 'react-redux'

import Layout from './Layout'

const mapStateToProps = state => ({
  avatarUrl: 'https://banner2.kisspng.com/20180616/gks/kisspng-roblox-avatar-rapper-clip-art-cadea-carbonada-5b255cb41c2623.2620842815291752201153.jpg',
  userName: state.user.name,
})

export default connect(mapStateToProps)(Layout)
