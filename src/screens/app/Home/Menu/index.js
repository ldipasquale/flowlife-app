import React from 'react'
import PropTypes from 'prop-types'
import { withNavigation } from 'react-navigation'

import { Image, View } from 'react-native'
import { AlertLabel, Card, Title } from '@components'

import { fontSizes } from '@stylesheets'

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
      </View>
    )
  }

  constructor(props) {
    super(props)

    this.handlePressItem = this.handlePressItem.bind(this)

    this.items = [Battles, Shop, Investments].map(Screen => ({
      label: Screen.navigationOptions.label,
      icon: Screen.navigationOptions.icon,
      color: Screen.navigationOptions.color,
      onPress: () => this.handlePressItem(Screen.navigationOptions.label),
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

Menu.propTypes = {
  navigation: PropTypes.object.isRequired,
}

export default withNavigation(Menu)
