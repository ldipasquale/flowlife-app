import React from 'react'
import PropTypes from 'prop-types'

import { View } from 'react-native'
import { Modal, Button, StoreItem, OptionsSelector } from '@components'

import assets from '@assets'
import { colors } from '@stylesheets'

import screens from '@screens'
import StoreService from '@services/Store'

import styles from './styles'

class BuyShopItem extends React.PureComponent {
  static screenOptions = {
    id: screens.BUY_SHOP_ITEM,
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
    const { navigation } = this.props

    const { item } = navigation.state.params

    try {
      const managerTip = await StoreService.buy({
        item,
        paymentMethod: selectedPaymentMethod,
      })
    } catch(error) {
      console.log(error)
    }
  }

  render() {
    const { navigation } = this.props

    const { item } = navigation.state.params

    return (
      <Modal
        renderContent={({ handleClose }) => (
          <React.Fragment>
            <StoreItem
              size="big"
              imageSource={assets.water}
              tag={`+${item.flow} flow`}
              tagColor={colors.ORANGE}
              title={item.name}
              price={item.price}
            />

            <View style={styles.typeSelectorContainer}>
              <OptionsSelector
                options={[{
                  id: 'cash',
                  name: 'Efectivo',
                  subtitle: '$18.000',
                }, {
                  id: 'credit',
                  name: 'Tarjeta',
                  subtitle: '-$9.400',
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

BuyShopItem.propTypes = {
  navigation: PropTypes.object.isRequired,
}

export default BuyShopItem
