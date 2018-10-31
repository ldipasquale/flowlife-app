import React from 'react'
import PropTypes from 'prop-types'
import numeral from 'numeral'

import { View, FlatList, Text } from 'react-native'
import { Card, Spinner } from '@components'

import screens from '@screens/list'

import { formats } from '@constants'

import styles from './styles'

const screensNumberFormat = {
  [screens.MONEY]: formats.CURRENCY,
}

export default ({ label }) => {
  class RankingTab extends React.PureComponent {
    static screenOptions = {
      label,
    }

    static getKey(user) {
      return user.name
    }

    constructor(props) {
      super(props)

      this.numeralFormat = screensNumberFormat[label]

      this.renderUser = this.renderUser.bind(this)
    }

    renderUser({ item, index }) {
      const rankingNumber = index + 1

      const processedValue = numeral(item.value).format(this.numeralFormat)

      return (
        <Card>
          <View style={styles.itemContainer}>
            {rankingNumber >= 1 && rankingNumber <= 3 && (
              <View
                style={[
                  styles.rankingNumber,
                  rankingNumber === 1 && styles.rankingNumberOne,
                  rankingNumber === 2 && styles.rankingNumberTwo,
                  rankingNumber === 3 && styles.rankingNumberThree,
                ]}
              >
                <Text style={styles.rankingNumberText}>
                  {rankingNumber}
                </Text>
              </View>
            )}

            <Text style={styles.userName}>{`${item.name} (${processedValue})`}</Text>
          </View>
        </Card>
      )
    }

    render() {
      const { items, isFetching } = this.props

      return (
        <View style={styles.container}>
          {isFetching ? (
            <Spinner />
          ) : (
            <FlatList
              data={items}
              renderItem={this.renderUser}
              keyExtractor={RankingTab.getKey}
            />
          )}
        </View>
      )
    }
  }

  RankingTab.propTypes = {
    items: PropTypes.array,
    isFetching: PropTypes.bool,
  }

  RankingTab.defaultProps = {
    items: [],
    isFetching: true,
  }

  return RankingTab
}
