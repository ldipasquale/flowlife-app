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

class IncreaseCreditCardLimit extends React.PureComponent {
  static screenOptions = {
    id: screens.INCREASE_CREDIT_CARD_LIMIT,
  }

  static getDerivedStateFromProps(props) {
    const { navigation } = props
    const { limit } = navigation.state.params

    return {
      amount: limit,
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
    const { onIncrease } = this.props

    const { amount } = this.state

    return onIncrease({ amount: parseInt(amount, 10) })
  }

  render() {
    const { navigation } = this.props

    const { amount } = this.state
    const { maxLimit } = navigation.state.params

    return (
      <Modal
        renderContent={({ handleClose }) => (
          <React.Fragment>
            <StoreItem
              size="big"
              imageSource={assets.wallet}
              title="Límite de tarjeta de crédito"
            />

            <View style={styles.inputsContainer}>
              <Text style={[styles.moneyCurrency, styles.money]}>$</Text>

              <TextInput
                style={[styles.textInput, styles.money]}
                value={amount}
                onChange={this.handleChangeAmount}
              />

              <Text style={styles.limit}>
                {`/ ${numeral(maxLimit).format(formats.CURRENCY)}`}
              </Text>
            </View>

            <Button
              color={colors.ORANGE}
              onPress={() => {
                this.handleSubmit()
                handleClose()
              }}
            >
              Pedir nuevo límite
            </Button>
          </React.Fragment>
        )}
      />
    )
  }
}

IncreaseCreditCardLimit.propTypes = {
  navigation: PropTypes.object.isRequired,
  onIncrease: PropTypes.func.isRequired,
}

export default IncreaseCreditCardLimit
