import React from 'react'
import PropTypes from 'prop-types'
import { Text } from 'react-native'

import styles from './styles'

class Title extends React.PureComponent {
  render() {
    const { children, color, fontSize, style } = this.props

    return (
      <Text
        style={[
          styles.title,
          color && { color },
          fontSize && { fontSize },
          style,
        ]}
      >
        {children.toUpperCase()}
      </Text>
    )
  }
}

Title.propTypes = {
  children: PropTypes.string.isRequired,
  color: PropTypes.string,
  fontSize: PropTypes.number,
  style: PropTypes.number,
}

Title.defaultProps = {
  color: null,
  fontSize: null,
  style: null,
}

export default Title
