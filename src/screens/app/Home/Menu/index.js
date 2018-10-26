import React from 'react'
import PropTypes from 'prop-types'
import { withNavigation } from 'react-navigation'

import { Image } from 'react-native'
import { AlertLabel, Card, Title, ItemList } from '@components'

import { fontSizes } from '@stylesheets'

import Battles from '@screens/app/Battles'
import Shop from '@screens/app/Shop'
import Investments from '@screens/app/Investments'

import styles from './styles'

class Menu extends React.PureComponent {
  static renderItem({ onPress, color, label, icon, alertsAmount }) {
    return (
      <React.Fragment>
        <Card
          style={styles.card}
          onPress={onPress}
        >
          <Image
            style={styles.itemIcon}
            source={icon}
          />

          <Title
            color={color}
            fontSize={fontSizes.XSMALL}
          >
            {label}
          </Title>
        </Card>

        {alertsAmount && (
          <AlertLabel
            onPress={onPress}
            color={color}
            style={styles.alert}
          >
            {alertsAmount}
          </AlertLabel>
        )}
      </React.Fragment>
    )
  }

  constructor(props) {
    super(props)

    this.handlePressItem = this.handlePressItem.bind(this)

    this.items = [Battles, Shop, Investments].map(Screen => ({
      label: Screen.screenOptions.label,
      icon: Screen.screenOptions.icon,
      color: Screen.screenOptions.color,
      onPress: () => this.handlePressItem(Screen.screenOptions.label),
    }))
  }

  handlePressItem(screenId) {
    const { navigation } = this.props

    return navigation.navigate(screenId)
  }

  render() {
    return (
      <ItemList
        idKey="label"
        items={this.items}
        renderItem={Menu.renderItem}
      />
    )
  }
}

Menu.propTypes = {
  navigation: PropTypes.object.isRequired,
}

export default withNavigation(Menu)
