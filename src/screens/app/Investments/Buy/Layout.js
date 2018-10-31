import React from 'react'
import PropTypes from 'prop-types'
import numeral from 'numeral'

import { View } from 'react-native'
import { Modal, Button, StoreItem, OptionsSelector } from '@components'

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

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  async handleSubmit() {
    const { navigation, onBuyItem } = this.props

    const { item } = navigation.state.params

    return onBuyItem({ item })
  }

  render() {
    const { navigation, money } = this.props

    const { item } = navigation.state.params

    return (
      <Modal
        renderContent={({ handleClose }) => (
          <React.Fragment>
            <StoreItem
              size="big"
              imageUrl={item.img}
              title={item.nice_name}
              price={item.money_cost}
              flowPrice={item.flow_cost}
            />

            <View style={styles.typeSelectorContainer}>
              <OptionsSelector
                defaultSelectedId="cash"
                options={[{
                  id: 'cash',
                  name: 'Efectivo',
                  subtitle: numeral(money).format(formats.CURRENCY),
                }]}
                onChange={() => null}
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
  onBuyItem: PropTypes.func.isRequired,
}

export default BuyInvestmentItem
