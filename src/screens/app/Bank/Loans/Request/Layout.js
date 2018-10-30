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

const INTEREST_RATE = 0.03

class RequestLoan extends React.PureComponent {
  static screenOptions = {
    id: screens.REQUEST_LOAN,
  }

  constructor(props) {
    super(props)

    this.state = {
      amount: 1000,
      duration: 4,
    }

    this.handleChangeAmount = this.handleChangeAmount.bind(this)
    this.handleChangeDuration = this.handleChangeDuration.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChangeAmount(value) {
    return this.setState({
      amount: value || 0,
    })
  }

  handleChangeDuration(value) {
    return this.setState({
      duration: value || 0,
    })
  }

  async handleSubmit() {
    const { onRequest } = this.props
    const { amount, duration } = this.state

    return onRequest({
      amount: parseInt(amount, 10),
      duration: parseInt(duration, 10),
      interestRate: INTEREST_RATE,
    })
  }

  render() {
    const { amount, duration } = this.state

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

              <Text style={styles.description}>
                {`a ${numeral(INTEREST_RATE).format(formats.PERCENTAGE)} por`}
              </Text>

              <TextInput
                style={[styles.textInput, styles.money]}
                value={duration}
                onChange={this.handleChangeDuration}
              />

              <Text style={styles.description}>
                {'semanas'}
              </Text>
            </View>

            <Button
              color={colors.ORANGE}
              onPress={() => {
                this.handleSubmit()
                handleClose()
              }}
            >
              Pedir ahora
            </Button>
          </React.Fragment>
        )}
      />
    )
  }
}

RequestLoan.propTypes = {
  onRequest: PropTypes.func.isRequired,
}

export default RequestLoan
