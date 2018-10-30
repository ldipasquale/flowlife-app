import React from 'react'
import PropTypes from 'prop-types'
import numeral from 'numeral'

import { View } from 'react-native'
import { Title, Value } from '@components'

import { colors } from '@stylesheets'
import { formats } from '@constants'

const color = colors.GREEN

class StatsMoney extends React.PureComponent {
  render() {
    const { value } = this.props

    return (
      <View>
        <Title color={color}>Dinero</Title>
        <Value color={color}>{numeral(value).format(formats.CURRENCY)}</Value>
      </View>
    )
  }
}

StatsMoney.propTypes = {
  value: PropTypes.number.isRequired,
}

export default StatsMoney
