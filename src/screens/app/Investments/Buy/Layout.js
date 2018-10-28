import React from 'react'
import PropTypes from 'prop-types'
import numeral from 'numeral'

import { View } from 'react-native'
import { Modal, Button, StoreItem, OptionsSelector } from '@components'

import assets from '@assets'
import { colors } from '@stylesheets'
import { formats } from '@constants'

import screens from '@screens/list'

import styles from './styles'

class BuyInvestmentItem extends React.PureComponent {
  static screenOptions = {
    id: screens.BUY_INVESTMENT_ITEM,
  }

  constructor(props) {
    super(props)

    this.state = {}

    this.handleTypeChange = this.handleTypeChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleTypeChange(id) {
    return this.setState({
      selectedPaymentMethod: id,
    })
  }

  async handleSubmit() {
    const { selectedPaymentMethod } = this.state
    const { navigation, onBuyItem } = this.props

    const { item } = navigation.state.params

    return onBuyItem({
      item,
      paymentMethod: selectedPaymentMethod,
    })
  }

  render() {
    const { navigation, money, creditCardBalance } = this.props

    const { item } = navigation.state.params

    return (
      <Modal
        renderContent={({ handleClose }) => (
          <React.Fragment>
            <StoreItem
              size="big"
              imageSource={assets.water}
              title={item.nice_name}
              price={item.money_cost}
            />

            <View style={styles.typeSelectorContainer}>
              <OptionsSelector
                options={[{
                  id: 'cash',
                  name: 'Efectivo',
                  subtitle: numeral(money).format(formats.CURRENCY),
                }, {
                  id: 'credit',
                  name: 'Tarjeta',
                  subtitle: numeral(creditCardBalance * -1).format(formats.CURRENCY),
                }]}
                onChange={this.handleTypeChange}
              />
            </View>

            <Button
              color={colors.GREEN}
              onPress={() => {
                this.handleSubmit()
                handleClose()
              }}
            >
              Comprar ahora
            </Button>
          </React.Fragment>
        )}
      />
    )
  }
}

BuyInvestmentItem.propTypes = {
  navigation: PropTypes.object.isRequired,
  money: PropTypes.number.isRequired,
  creditCardBalance: PropTypes.number.isRequired,
  onBuyItem: PropTypes.func.isRequired,
}

export default BuyInvestmentItem