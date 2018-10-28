import React from 'react'
import PropTypes from 'prop-types'
import { App, Card, ItemList, Spinner, StoreItem } from '@components'

import { withNavigation } from '@navigation'

import assets from '@assets'
import { colors } from '@stylesheets'

import screens from '@screens/list'

import Buy from './Buy'

class Investments extends React.PureComponent {
  static screenOptions = {
    label: screens.INVESTMENTS,
    icon: assets.investments,
    color: colors.BLUE,
    modals: [Buy],
  }

  static entities = ['investments']

  constructor(props) {
    super(props)

    this.renderItem = this.renderItem.bind(this)
  }

  renderItem(item) {
    const { navigation } = this.props

    return (
      <Card
        onPress={() => navigation.navigate(screens.BUY_INVESTMENT_ITEM, { item })}
      >
        <StoreItem
          imageSource={assets.water}
          title={item.nice_name}
          price={item.money_cost}
        />
      </Card>
    )
  }

  render() {
    const { investments, isFetching } = this.props

    return (
      <App>
        {isFetching ? (
          <Spinner />
        ) : (
          <ItemList
            idKey="name"
            items={investments}
            renderItem={this.renderItem}
          />
        )}
      </App>
    )
  }
}

Investments.propTypes = {
  navigation: PropTypes.object.isRequired,
  investments: PropTypes.array,
  isFetching: PropTypes.bool,
}

Investments.defaultProps = {
  investments: [],
  isFetching: true,
}

export default withNavigation(Investments)
