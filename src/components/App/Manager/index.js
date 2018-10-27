import React from 'react'
import PropTypes from 'prop-types'

import { View, TouchableOpacity, Image } from 'react-native'

import { withNavigation } from '@navigation'

import assets from '@assets'
import screens from '@screens'

import styles from './styles'

class Manager extends React.PureComponent {
  render() {
    const { navigation } = this.props

    return (
      <View style={styles.button}>
        <TouchableOpacity
          onPress={() => navigation.navigate(screens.MANAGER_TIP)}
          activeOpacity={0.8}
        >
          <Image source={assets.manager} />
        </TouchableOpacity>
      </View>
    )
  }
}

Manager.propTypes = {
  navigation: PropTypes.object.isRequired,
}

export default withNavigation(Manager)
