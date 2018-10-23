import React from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-native'

import { colors, spacings } from '@stylesheets'

import styles from './styles'

class ProgressBar extends React.PureComponent {
  render() {
    const { value, height, color } = this.props

    return (
      <View
        style={[styles.container, {
          height,
          borderRadius: height,
        }]}
      >
        <View
          style={{
            flex: value,
            backgroundColor: color,
            borderTopLeftRadius: height,
            borderBottomLeftRadius: height,
            height,
          }}
        />
      </View>
    )
  }
}

ProgressBar.propTypes = {
  value: PropTypes.number.isRequired,
  height: PropTypes.number,
  color: PropTypes.string,
}

ProgressBar.defaultProps = {
  height: spacings.STANDARD,
  color: colors.ORANGE,
}

export default ProgressBar
