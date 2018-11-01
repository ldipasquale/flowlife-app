import React from 'react'
import PropTypes from 'prop-types'

import { View } from 'react-native'
import { Title, Value } from '@components'

import { colors, fontSizes } from '@stylesheets'

import styles from './styles'

const color = colors.DARK_GRAY

class StatsFans extends React.PureComponent {
  render() {
    const { value, size } = this.props

    return (
      <View>
        <Title
          style={styles.text}
          color={color}
        >
          Semana
        </Title>

        <Value
          style={styles.text}
          fontSize={size === 'small' ? fontSizes.XXLARGE : undefined}
          color={color}
        >
          {value}
        </Value>
      </View>
    )
  }
}

StatsFans.propTypes = {
  value: PropTypes.number.isRequired,
  size: PropTypes.oneOf(['small', 'standard']),
}

StatsFans.defaultProps = {
  size: 'standard',
}

export default StatsFans
