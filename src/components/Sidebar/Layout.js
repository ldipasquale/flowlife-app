import React from 'react'
import PropTypes from 'prop-types'

import { AsyncStorage, TouchableOpacity, ScrollView, View, Text, Image } from 'react-native'
import { DrawerItems, SafeAreaView, withNavigation } from 'react-navigation'

import assets from '@assets'
import screens from '@screens/list'

import styles from './styles'

class Sidebar extends React.Component {
  constructor(props) {
    super(props)

    this.handleSignOut = this.handleSignOut.bind(this)
  }

  async handleSignOut() {
    const { navigation } = this.props

    await AsyncStorage.removeItem('email')

    navigation.navigate(screens.AUTH)
  }

  render() {
    const { userName, avatarUrl } = this.props

    return (
      <ScrollView>
        <View style={styles.header}>
          <Image
            source={{ uri: avatarUrl }}
            style={styles.avatarIcon}
          />

          <View style={styles.userNameContainer}>
            <Text style={styles.userName}>{userName}</Text>

            <TouchableOpacity onPress={this.handleSignOut}>
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
}

export default withNavigation(Sidebar)
