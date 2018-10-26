import React from 'react'
import PropTypes from 'prop-types'
import { withNavigation } from 'react-navigation'

import { View, TouchableOpacity, Text, Image } from 'react-native'
import { Avatar } from '@components'

import assets from '@assets'

import styles from './styles'

class Header extends React.PureComponent {
  static leftIconActions = {
    menu: navigation => navigation.openDrawer,
    back: navigation => () => navigation.goBack(null),
  }

  static onPressLeftIcon(leftIcon) {
    return Header.leftIconActions[leftIcon]
  }

  render() {
    const { navigation, avatarUrl, leftIcon } = this.props

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
  leftIcon: PropTypes.oneOf(['menu', 'back']),
}

Header.defaultProps = {
  avatarUrl: null,
  leftIcon: 'menu',
}

export default withNavigation(Header)
