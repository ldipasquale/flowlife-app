import React from 'react'
import PropTypes from 'prop-types'

import { View, TouchableOpacity, Text, Image } from 'react-native'
import { Avatar } from '@components'

import { withNavigation } from '@navigation'

import assets from '@assets'

import screens from '@screens/list'

import styles from './styles'

const Icons = {
  MENU: 'menu',
  BACK: 'back',
}

class Header extends React.PureComponent {
  static leftIconActions = {
    [Icons.MENU]: navigation => navigation.openDrawer,
    [Icons.BACK]: navigation => () => navigation.goBack(null),
  }

  static onPressLeftIcon(leftIcon) {
    return Header.leftIconActions[leftIcon]
  }

  render() {
    const { navigation, avatarUrl } = this.props

    const leftIcon = navigation.state.routeName === screens.HOME ? Icons.MENU : Icons.BACK

    return (
      <View style={styles.container}>
        <View style={styles.column}>
          <TouchableOpacity
            style={styles.leftIcon}
            onPress={Header.onPressLeftIcon(leftIcon)(navigation)}
            activeOpacity={0.8}
          >
            <Image source={assets[leftIcon]} />
          </TouchableOpacity>

          <Text style={styles.title}>
            {navigation.state.routeName}
          </Text>
        </View>

        {avatarUrl && (
          <View style={styles.column}>
            <Avatar url={avatarUrl} />
          </View>
        )}
      </View>
    )
  }
}

Header.propTypes = {
  navigation: PropTypes.object.isRequired,
  avatarUrl: PropTypes.string,
}

Header.defaultProps = {
  avatarUrl: null,
}

export default withNavigation(Header)
