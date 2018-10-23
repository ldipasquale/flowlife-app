import React from 'react'
import { View, ActivityIndicator } from 'react-native'

import { colors } from '@stylesheets'
import styles from './styles'

class Spinner extends React.PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator
          size="large"
          color={colors.BLUE}
        />
      </View>
    )
  }
}

export default Spinner
