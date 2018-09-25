import React from 'react'
import PropTypes from 'prop-types'
import { withNavigation } from 'react-navigation';

import { View, TouchableOpacity, Text, Image } from 'react-native'

import styles from './styles'

class Header extends React.PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    const { navigation, avatarUrl } = this.props

    return (
      <View style={styles.container}>
        <View style={styles.col}>
          <TouchableOpacity
            style={styles.leftIcon}
            onPress={navigation.openDrawer}
          >
            <Image source={require('@assets/icons/menu.png')} />
          </TouchableOpacity>

          <Text style={styles.title}>
            {navigation.state.routeName}
          </Text>
        </View>

        <View style={styles.col}>
          <Image
            source={{ uri: avatarUrl }}
            style={styles.avatarIcon}
          />
        </View>
      </View>
    )
  }
}

Header.propTypes = {
  //title: PropTypes.string.isRequired,
}

export default withNavigation(Header)
