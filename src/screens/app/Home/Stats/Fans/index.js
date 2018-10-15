import React from 'react'
import PropTypes from 'prop-types'

import { View } from 'react-native'
import { Title, Value } from '@components'

import { colors } from '@stylesheets'

import styles from './styles'

const color = colors.BLUE

class StatsFans extends React.PureComponent {
  render() {
    const { value } = this.props

    return (
      <View style={styles.container}>
        <Title
          style={styles.text}
          color={color}
        >
          Fans
        </Title>

        <Value
          style={styles.text}
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
}

export default StatsFans
