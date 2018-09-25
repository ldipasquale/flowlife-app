import React from 'react'
import { ScrollView, View, Text, Image } from 'react-native'
import { DrawerItems, SafeAreaView } from 'react-navigation'

import styles from './styles'

class Sidebar extends React.Component {
  render() {
    return (
      <ScrollView>
        <View style={styles.header}>
          <Image
            source={{ uri: 'https://banner2.kisspng.com/20180616/gks/kisspng-roblox-avatar-rapper-clip-art-cadea-carbonada-5b255cb41c2623.2620842815291752201153.jpg' }}
            style={styles.avatarIcon}
          />

          <Text style={styles.userName}>Ray Jones</Text>
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

export default Sidebar
