import React from 'react'
import PropTypes from 'prop-types'

import { View } from 'react-native'
import { Title } from '@components'

import { colors, fontSizes } from '@stylesheets'

import styles from './styles'

const color = colors.ORANGE

class StatsFlow extends React.PureComponent {
  render() {
    const { value } = this.props

    return (
      <View style={styles.container}>
        <Title
          color={color}
          fontSize={fontSizes.XSMALL}
        >
          {`Flow: ${value.toString()}`}
        </Title>
      </View>
    )
  }
}

StatsFlow.propTypes = {
  value: PropTypes.number.isRequired,
}

export default StatsFlow
