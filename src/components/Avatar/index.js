import React from 'react'
import PropTypes from 'prop-types'

import { View, Image } from 'react-native'

import { spacings } from '@stylesheets'

import styles from './styles'

class Avatar extends React.PureComponent {
  render() {
    const { url, size, style, containerStyle } = this.props

    return (
      <View
        style={[
          styles.container,
          containerStyle !== -1 && containerStyle,
          {
            width: size,
            height: size,
            borderRadius: size,
          },
        ]}
      >
        <Image
          source={{ uri: url }}
          style={[
            styles.image,
            style !== -1 && style,
            {
              width: size,
              height: size,
              borderRadius: size,
            },
          ]}
        />
      </View>
    )
  }
}

Avatar.propTypes = {
  url: PropTypes.string.isRequired,
  size: PropTypes.number,
  style: PropTypes.number,
  containerStyle: PropTypes.number,
}

Avatar.defaultProps = {
  size: spacings.HUGE,
  style: -1,
  containerStyle: -1,
}

export default Avatar
