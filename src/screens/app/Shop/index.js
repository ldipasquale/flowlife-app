import React from 'react'
import PropTypes from 'prop-types'
import { withNavigation } from 'react-navigation'

import { App, Card, ItemList, Spinner, StoreItem } from '@components'

import assets from '@assets'
import { colors } from '@stylesheets'

import screens from '@screens'

import Buy from './Buy'

class Shop extends React.PureComponent {
  static screenOptions = {
    label: screens.SHOP,
    icon: assets.shop,
    color: colors.GREEN,
    modals: [Buy],
  }

  static entities = ['store']

  constructor(props) {
    super(props)

    this.renderItem = this.renderItem.bind(this)
  }

  renderItem(item) {
    const { navigation } = this.props

    return (
      <Card
        onPress={() => navigation.navigate(screens.BUY_SHOP_ITEM, { item })}
      >
        <StoreItem
          imageSource={assets.water}
          tag={`+${item.flow} flow`}
          tagColor={colors.ORANGE}
          title={item.name}
          price={item.price}
        />
      </Card>
    )
  }

  render() {
    const { store, isFetching } = this.props

    return (
      <App>
        {isFetching ? (
          <Spinner />
        ) : (
          <ItemList
            idKey="name"
            items={store.items}
            renderItem={this.renderItem}
          />
        )}
      </App>
    )
  }
}

Shop.propTypes = {
  navigation: PropTypes.object.isRequired,
  store: PropTypes.object,
  isFetching: PropTypes.bool,
}

Shop.defaultProps = {
  store: {
    items: [],
  },
  isFetching: true,
}

export default withNavigation(Shop)
