import React from 'react'
import PropTypes from 'prop-types'

import { View } from 'react-native'
import { Modal, Button, StoreItem, OptionsSelector } from '@components'

import assets from '@assets'
import { colors } from '@stylesheets'

import screens from '@screens'

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

  handleTypeChange(typeId) {
    return this.setState({
      selectedTypeId: typeId,
    })
  }

  handleSubmit() {
    const { selectedTypeId } = this.state
    const { navigation } = this.props

    const { item } = navigation.state.params

    console.log(selectedTypeId)
    console.log(item)
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
              title={item.nice_name}
              price={item.money_cost}
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

BuyInvestmentItem.propTypes = {
  navigation: PropTypes.object.isRequired,
}

export default BuyInvestmentItem
