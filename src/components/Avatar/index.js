import React from 'react'
import PropTypes from 'prop-types'

import { Image } from 'react-native'

import { spacings } from '@stylesheets'

class Avatar extends React.PureComponent {
  render() {
    const { url, size } = this.props

    return (
      <Image
        source={{ uri: url }}
        style={{
          width: size,
          height: size,
          borderRadius: size,
        }}
      />
    )
  }
}

Avatar.propTypes = {
  url: PropTypes.string.isRequired,
  size: PropTypes.number,
}

Avatar.defaultProps = {
  size: spacings.HUGE,
}

export default Avatar
