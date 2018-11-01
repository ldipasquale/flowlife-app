import { connect } from 'react-redux'

import { AsyncStorage } from 'react-native'

import { cleanUser } from '@store/user/actions'

import screens from '@screens/list'

import Layout from './Layout'

const mapStateToProps = state => ({
  avatarUrl: state.user.avatar,
  userName: state.user.name,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onSignOut: async () => {
    const { navigation } = ownProps

    await AsyncStorage.removeItem('email')

    navigation.navigate(screens.AUTH)

    dispatch(cleanUser())
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(Layout)
