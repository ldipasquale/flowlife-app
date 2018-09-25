import React from 'react'
import { withNavigation } from 'react-navigation';

import { Image, View, Text } from 'react-native'
import { AlertLabel, Card, Title } from '@components'

import { colors, fontSizes } from '@stylesheets'

import Battles from '@screens/app/Battles'
import Shop from '@screens/app/Shop'
import Investments from '@screens/app/Investments'

import styles from './styles'

class Menu extends React.PureComponent {
  static renderItem({ onPress, color, label, icon, alertsAmount }) {
    return (
      <View
        key={label}
        style={styles.cardContainer}
      >
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
            fontSize={fontSizes.SMALL}
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
      </View>
    )
  }

  constructor(props) {
    super(props)

    this.handlePressItem = this.handlePressItem.bind(this)

    this.items = [Battles, Shop, Investments].map(Screen => ({
      label: Screen.label,
      icon: Screen.icon,
      color: Screen.color,
      onPress: () => this.handlePressItem(Screen.label),
    }))
  }

  handlePressItem(screenId) {
    const { navigation } = this.props

    return navigation.navigate(screenId)
  }

  render() {
    return (
      <View style={styles.container}>
        {this.items.map(Menu.renderItem)}
      </View>
    )
  }
}

export default withNavigation(Menu)
