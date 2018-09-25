import React from 'react'
import PropTypes from 'prop-types'
import { withNavigation } from 'react-navigation'

import {
  View, TouchableOpacity, Text, Image,
} from 'react-native'

import assets from '@assets'

import styles from './styles'

class Header extends React.PureComponent {
  render() {
    const { navigation, avatarUrl } = this.props

    return (
      <View style={styles.container}>
        <View style={styles.column}>
          <TouchableOpacity
            style={styles.leftIcon}
            onPress={navigation.openDrawer}
            activeOpacity={0.8}
          >
            <Image source={assets.menu} />
          </TouchableOpacity>

          <Text style={styles.title}>
            {navigation.state.routeName}
          </Text>
        </View>

        {avatarUrl && (
          <View style={styles.column}>
            <Image
              source={{ uri: avatarUrl }}
              style={styles.avatarIcon}
            />
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
