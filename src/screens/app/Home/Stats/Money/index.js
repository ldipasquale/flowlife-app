import React from 'react'
import PropTypes from 'prop-types'

import { View } from 'react-native'
import { Title, Value } from '@components'

import { colors } from '@stylesheets'

import styles from './styles'

const color = colors.GREEN

class StatsMoney extends React.PureComponent {
  render() {
    const { value } = this.props

    return (
      <View style={styles.container}>
        <Title color={color}>Dinero</Title>
        <Value color={color}>${value}</Value>
      </View>
    )
  }
}

StatsMoney.propTypes = {
  value: PropTypes.number.isRequired,
}

export default StatsMoney
