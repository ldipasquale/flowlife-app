import React from 'react'
import PropTypes from 'prop-types'

import { View } from 'react-native'
import { Title, ProgressBar } from '@components'

import { colors } from '@stylesheets'

import styles from './styles'

const color = colors.ORANGE

class StatsFlow extends React.PureComponent {
  render() {
    const { value } = this.props

    return (
      <View style={styles.container}>
        <Title color={color}>Flow</Title>
        <Title color={color}>{value.toString()}</Title>
      </View>
    )
  }
}

StatsFlow.propTypes = {
  value: PropTypes.number.isRequired,
}

export default StatsFlow
