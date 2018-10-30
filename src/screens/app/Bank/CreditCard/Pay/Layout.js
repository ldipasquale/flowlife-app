import React from 'react'
import PropTypes from 'prop-types'
import numeral from 'numeral'

import { View, Text } from 'react-native'
import { Modal, Button, StoreItem, TextInput } from '@components'

import assets from '@assets'
import { colors } from '@stylesheets'
import { formats } from '@constants'

import screens from '@screens/list'
import styles from '@screens/app/Bank/modalStyles'

class PayCreditCard extends React.PureComponent {
  static screenOptions = {
    id: screens.PAY_CREDIT_CARD,
  }

  static getDerivedStateFromProps(props) {
    const { navigation } = props
    const { balance } = navigation.state.params

    return {
      amount: balance,
    }
  }

  constructor(props) {
    super(props)

    this.state = {}

    this.handleChangeAmount = this.handleChangeAmount.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChangeAmount(value) {
    return this.setState({
      amount: value,
    })
  }

  async handleSubmit() {
    const { onPay } = this.props

    const { amount } = this.state

    return onPay({ amount: parseInt(amount, 10) })
  }

  render() {
    const { navigation } = this.props

    const { amount } = this.state
    const { balance } = navigation.state.params

    return (
      <Modal
        renderContent={({ handleClose }) => (
          <React.Fragment>
            <StoreItem
              size="big"
              imageSource={assets.wallet}
              title="Tarjeta de crédito"
            />

            <View style={styles.inputsContainer}>
              <Text style={[styles.moneyCurrency, styles.money]}>$</Text>

              <TextInput
                style={[styles.textInput, styles.money]}
                value={amount}
                onChange={this.handleChangeAmount}
              />

              <Text style={styles.limit}>
                {`/ ${numeral(balance).format(formats.CURRENCY)}`}
              </Text>
            </View>

            <Button
              color={colors.ORANGE}
              onPress={() => {
                this.handleSubmit()
                handleClose()
              }}
            >
              Pagar ahora
            </Button>
          </React.Fragment>
        )}
      />
    )
  }
}

PayCreditCard.propTypes = {
  navigation: PropTypes.object.isRequired,
  onPay: PropTypes.func.isRequired,
}

export default PayCreditCard
