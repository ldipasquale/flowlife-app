import React from 'react'
import PropTypes from 'prop-types'

import { View } from 'react-native'
import { Title } from '@components'

import { colors, fontSizes } from '@stylesheets'

import styles from './styles'

const color = colors.BLUE

class StatsFans extends React.PureComponent {
  render() {
    const { value } = this.props

    return (
      <View>
        <Title
          style={styles.text}
          color={color}
          fontSize={fontSizes.XSMALL}
        >
          {`${value} fans`}
        </Title>
      </View>
    )
  }
}

StatsFans.propTypes = {
  value: PropTypes.number.isRequired,
}

export default StatsFans
