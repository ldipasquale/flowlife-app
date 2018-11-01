import React from 'react'
import PropTypes from 'prop-types'
import numeral from 'numeral'

import { withNavigation } from '@navigation'

import { TouchableOpacity, Image, View } from 'react-native'
import { Title, Value } from '@components'

import assets from '@assets'

import screens from '@screens/list'

import { colors, fontSizes } from '@stylesheets'
import { formats } from '@constants'

import styles from './styles'

const color = colors.GREEN

class StatsMoney extends React.PureComponent {
  render() {
    const { value, navigation, size } = this.props

    return (
      <View>
        <Title color={color}>Dinero</Title>

        <View style={styles.valueContainer}>
          <Value
            fontSize={size === 'small' ? fontSizes.XXLARGE : undefined}
            color={color}
          >
            {numeral(value).format(formats.CURRENCY)}
          </Value>

          <TouchableOpacity onPress={() => navigation.navigate(screens.BANK)}>
            <Image
              style={styles.bankIcon}
              source={assets.bank}
            />
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

StatsMoney.propTypes = {
  navigation: PropTypes.object.isRequired,
  value: PropTypes.number.isRequired,
  size: PropTypes.oneOf(['small', 'standard']),
}

StatsMoney.defaultProps = {
  size: 'standard',
}

export default withNavigation(StatsMoney)
