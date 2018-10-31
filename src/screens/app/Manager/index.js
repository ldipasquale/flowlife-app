import React from 'react'
import PropTypes from 'prop-types'

import { FlatList } from 'react-native'
import { App, Bullet, Spinner } from '@components'

import assets from '@assets'

import screens from '@screens/list'

import styles from './styles'

class Manager extends React.PureComponent {
  static screenOptions = {
    label: screens.MANAGER,
    icon: assets.squareManager,
  }

  static getKey(item) {
    return item
  }

  static entities = ['managerTips']

  static renderManagerTip({ item }) {
    return (
      <Bullet style={styles.item} withColon={false}>
        {item}
      </Bullet>
    )
  }

  render() {
    const { managerTips, isFetching } = this.props

    return (
      <App>
        {isFetching ? (
          <Spinner />
        ) : (
          <FlatList
            data={managerTips}
            renderItem={Manager.renderManagerTip}
            keyExtractor={Manager.getKey}
          />
        )}
      </App>
    )
  }
}

Manager.propTypes = {
  managerTips: PropTypes.array,
  isFetching: PropTypes.bool,
}

Manager.defaultProps = {
  managerTips: [],
  isFetching: true,
}

export default Manager
