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

class PayLoan extends React.PureComponent {
  static screenOptions = {
    id: screens.PAY_LOAN,
  }

  static getDerivedStateFromProps(props) {
    const { navigation } = props
    const { item } = navigation.state.params

    return {
      amount: Math.ceil(item.remaining_debt),
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
    const { navigation, onPay } = this.props

    const { item } = navigation.state.params
    const { amount } = this.state

    return onPay({
      id: item.id,
      amount: parseInt(amount, 10),
    })
  }

  render() {
    const { navigation} = this.props

    const { amount } = this.state
    const { item } = navigation.state.params

    return (
      <Modal
        renderContent={({ handleClose }) => (
          <React.Fragment>
            <StoreItem
              size="big"
              imageSource={assets.wallet}
              title="Préstamo"
            />

            <View style={styles.inputsContainer}>
              <Text style={[styles.moneyCurrency, styles.money]}>$</Text>

              <TextInput
                style={[styles.textInput, styles.money]}
                value={amount}
                onChange={this.handleChangeAmount}
              />

              <Text style={styles.limit}>
                {`/ ${numeral(item.remaining_debt).format(formats.CURRENCY)}`}
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

PayLoan.propTypes = {
  navigation: PropTypes.object.isRequired,
  onPay: PropTypes.func.isRequired,
}

export default PayLoan
