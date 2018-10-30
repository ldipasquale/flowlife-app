import React from 'react'
import PropTypes from 'prop-types'

import { View, FlatList, Text } from 'react-native'
import { Card, Spinner } from '@components'

import styles from './styles'

export default ({ label }) => {
  class RankingTab extends React.PureComponent {
    static screenOptions = {
      label,
    }

    static getKey(user) {
      return user
    }

    static renderUser({ item, index }) {
      const rankingNumber = index + 1

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

            <Text style={styles.userName}>{item}</Text>
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
              renderItem={RankingTab.renderUser}
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
