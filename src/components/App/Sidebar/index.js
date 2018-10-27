import React from 'react'

import { AsyncStorage, TouchableOpacity, ScrollView, View, Text, Image } from 'react-native'
import { DrawerItems, SafeAreaView, withNavigation } from 'react-navigation'

import assets from '@assets'
import screens from '@screens'

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
    return (
      <ScrollView>
        <View style={styles.header}>
          <Image
            source={{ uri: 'https://banner2.kisspng.com/20180616/gks/kisspng-roblox-avatar-rapper-clip-art-cadea-carbonada-5b255cb41c2623.2620842815291752201153.jpg' }}
            style={styles.avatarIcon}
          />

          <View style={styles.userNameContainer}>
            <Text style={styles.userName}>Ray Jones</Text>

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

export default withNavigation(Sidebar)
