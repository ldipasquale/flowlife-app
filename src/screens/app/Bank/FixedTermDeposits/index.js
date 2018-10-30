import React from 'react'
import PropTypes from 'prop-types'
import numeral from 'numeral'

import { withNavigation } from '@navigation'

import { View } from 'react-native'
import { Card, Button, Bullet } from '@components'

import { colors } from '@stylesheets'
import { formats } from '@constants'

import screens from '@screens/list'

import styles from './styles'

class BankFixedTermDeposits extends React.PureComponent {
  static renderFixedTermDeposit(fixedTermDeposit, fixedTermDepositIndex) {
    return (
      <Bullet
        key={fixedTermDepositIndex}
        title={numeral(fixedTermDeposit.money).format(formats.CURRENCY)}
        withColon={false}
      >
        {` (con tasa de interés de ${numeral(fixedTermDeposit.interest_rate).format(formats.PERCENTAGE)})`}
      </Bullet>
    )
  }

  render() {
    const { navigation, items } = this.props

    return (
      <Card title="Plazos fijos">
        <View style={styles.itemsContainer}>
          {items.map(BankFixedTermDeposits.renderFixedTermDeposit)}
        </View>

        <Button
          color={colors.ORANGE}
          onPress={() => navigation.navigate(screens.REQUEST_FIXED_TERM_DEPOSIT)}
        >
          Hacer plazo fijo
        </Button>
      </Card>
    )
  }
}

BankFixedTermDeposits.propTypes = {
  navigation: PropTypes.object.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape({
    money: PropTypes.number.isRequired,
    interest_rate: PropTypes.number.isRequired,
    duration: PropTypes.number.isRequired,
  })),
}

BankFixedTermDeposits.defaultProps = {
  items: [],
}

export default withNavigation(BankFixedTermDeposits)
