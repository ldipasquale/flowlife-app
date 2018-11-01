import React from 'react'
import PropTypes from 'prop-types'

import { Avatar } from '@components'
import { TouchableOpacity, ScrollView, View, Text, Image } from 'react-native'
import { DrawerItems, SafeAreaView, withNavigation } from 'react-navigation'

import { colors } from '@stylesheets'

import assets from '@assets'

import styles from './styles'

class Sidebar extends React.PureComponent {
  render() {
    const { userName, avatarUrl, onSignOut } = this.props

    return (
      <ScrollView>
        <View style={styles.header}>
          <Avatar
            url={avatarUrl}
            size={96}
            containerStyle={styles.avatarIcon}
          />

          <View style={styles.userNameContainer}>
            <Text style={styles.userName}>{userName}</Text>

            <TouchableOpacity onPress={onSignOut}>
              <Image style={styles.logOut} source={assets.logout} />
            </TouchableOpacity>
          </View>
        </View>

        <SafeAreaView
          style={styles.container}
          forceInset={{ top: 'always', horizontal: 'never' }}
        >
          <DrawerItems
            itemStyle={styles.item}
            iconContainerStyle={styles.itemIconContainer}
            labelStyle={styles.itemLabel}
            activeBackgroundColor={colors.LIGHTEN_GRAY}
            {...this.props}
          />
        </SafeAreaView>
      </ScrollView>
    )
  }
}

Sidebar.propTypes = {
  userName: PropTypes.string.isRequired,
  avatarUrl: PropTypes.string.isRequired,
  onSignOut: PropTypes.func.isRequired,
}

export default withNavigation(Sidebar)
