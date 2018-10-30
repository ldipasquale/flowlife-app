import React from 'react'
import PropTypes from 'prop-types'
import numeral from 'numeral'

import { withNavigation } from '@navigation'

import { View, Text, TouchableOpacity, Image } from 'react-native'
import { Card, Value, Button } from '@components'

import assets from '@assets'
import { colors } from '@stylesheets'
import { formats } from '@constants'

import screens from '@screens/list'

import styles from './styles'

class BankCreditCard extends React.PureComponent {
  render() {
    const { navigation, balance, limit, maxLimit } = this.props

    return (
      <Card title="Tarjeta de Crédito">
        <View style={styles.balanceContainer}>
          <Value color={colors.GREEN}>
            {numeral(balance * -1).format(formats.CURRENCY)}
          </Value>

          <Text style={styles.limit}>
            {`/ ${numeral(limit).format(formats.CURRENCY)}`}
          </Text>

          <TouchableOpacity
            style={styles.plusLimitContainer}
            onPress={() => navigation.navigate(screens.INCREASE_CREDIT_CARD_LIMIT, { limit, maxLimit })}
          >
            <Image source={assets.orangePlus} />
          </TouchableOpacity>
        </View>

        <Button
          color={colors.ORANGE}
          onPress={() => navigation.navigate(screens.PAY_CREDIT_CARD, { balance, limit })}
        >
          Pagar ahora
        </Button>
      </Card>
    )
  }
}

BankCreditCard.propTypes = {
  navigation: PropTypes.object.isRequired,
  balance: PropTypes.number.isRequired,
  limit: PropTypes.number.isRequired,
  maxLimit: PropTypes.number.isRequired,
}

export default withNavigation(BankCreditCard)
