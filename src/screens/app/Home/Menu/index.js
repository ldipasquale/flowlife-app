import React from 'react'
import { withNavigation } from 'react-navigation';

import { Image, View, Text } from 'react-native'
import { Card, Title } from '@components'

import { colors, fontSizes } from '@stylesheets'
import screens from '@screens'

import styles from './styles'

class Menu extends React.PureComponent {
  static renderItem({ onPress, color, label, icon }) {
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
      </View>
    )
  }

  constructor(props) {
    super(props)

    this.handlePressItem = this.handlePressItem.bind(this)
    this.handlePressBattles = () => this.handlePressItem(screens.BATTLES)
    this.handlePressShop = () => this.handlePressItem(screens.SHOP)
    this.handlePressInvestments = () => this.handlePressItem(screens.INVESTMENTS)

    this.items = [
      {
        label: screens.BATTLES,
        onPress: this.handlePressBattles,
        color: colors.ORANGE,
        icon: require('@assets/icons/battles.png'),
      },
      {
        label: screens.SHOP,
        onPress: this.handlePressShop,
        color: colors.GREEN,
        icon: require('@assets/icons/shop.png'),
      },
      {
        label: screens.INVESTMENTS,
        onPress: this.handlePressInvestments,
        color: colors.BLUE,
        icon: require('@assets/icons/investments.png'),
      },
    ]
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
