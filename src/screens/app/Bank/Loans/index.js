import React from 'react'
import PropTypes from 'prop-types'
import numeral from 'numeral'

import { withNavigation } from '@navigation'

import { View, Text, TouchableOpacity, Image } from 'react-native'
import { Card, Value, Button, Bullet } from '@components'

import assets from '@assets'
import { colors } from '@stylesheets'
import { formats } from '@constants'

import screens from '@screens/list'

import styles from './styles'

class BankLoans extends React.PureComponent {
  constructor(props) {
    super(props)

    this.renderLoan = this.renderLoan.bind(this)
  }

  renderLoan(loan) {
    const { navigation } = this.props

    const interestRateFormatted = numeral(loan.interest_rate).format(formats.PERCENTAGE)
    const remainingDebtFormatted = numeral(loan.remaining_debt).format(formats.CURRENCY)

    return (
      <Bullet
        key={loan.id}
        style={styles.itemContainer}
        title={numeral(loan.amount).format(formats.CURRENCY)}
        withColon={false}
        rightNode={(
          <Button
            size="small"
            color={colors.ORANGE}
            onPress={() => navigation.navigate(screens.PAY_LOAN, { item: loan })}
          >
            Pagar
          </Button>
        )}
      >
        {` (con tasa de interés de ${interestRateFormatted}, resta pagar ${remainingDebtFormatted})`}
      </Bullet>
    )
  }

  render() {
    const { items } = this.props

    const remainingDebt = items.reduce((amountAccumulator, item) => amountAccumulator + item.remaining_debt, 0)

    return (
      <Card title="Préstamos">
        <View style={styles.balanceContainer}>
          <Value color={colors.GREEN}>
            {numeral(remainingDebt * -1).format(formats.CURRENCY)}
          </Value>
        </View>

        <View>
          {items.map(this.renderLoan)}
        </View>

        <Button
          color={colors.ORANGE}
          onPress={() => navigation.navigate(screens.REQUEST_LOAN)}
        >
          Pedir préstamo
        </Button>
      </Card>
    )
  }
}

BankLoans.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    amount: PropTypes.number.isRequired,
    interest_rate: PropTypes.number.isRequired,
  })).isRequired,
}

export default withNavigation(BankLoans)
