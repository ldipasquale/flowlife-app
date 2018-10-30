import React from 'react'
import PropTypes from 'prop-types'

import { FlatList } from 'react-native'
import { App, Bullet, Spinner } from '@components'

import assets from '@assets'

import screens from '@screens/list'

import styles from './styles'

class Managers extends React.PureComponent {
  static screenOptions = {
    label: screens.MANAGERS,
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
            renderItem={Managers.renderManagerTip}
            keyExtractor={Managers.getKey}
          />
        )}
      </App>
    )
  }
}

Managers.propTypes = {
  managerTips: PropTypes.array,
  isFetching: PropTypes.bool,
}

Managers.defaultProps = {
  managerTips: [],
  isFetching: true,
}

export default Managers
