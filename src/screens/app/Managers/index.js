import React from 'react'
import PropTypes from 'prop-types'

import { FlatList } from 'react-native'
import { App, Bullet, Spinner } from '@components'

import { withNavigation } from '@navigation'

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

  constructor(props) {
    super(props)

    this.renderManagerTip = this.renderManagerTip.bind(this)
  }

  renderManagerTip({ item }) {
    const { navigation } = this.props

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
            renderItem={this.renderManagerTip}
            keyExtractor={Managers.getKey}
          />
        )}
      </App>
    )
  }
}

Managers.propTypes = {
  navigation: PropTypes.object.isRequired,
  managerTips: PropTypes.array,
  isFetching: PropTypes.bool,
}

Managers.defaultProps = {
  managerTips: [],
  isFetching: true,
}

export default withNavigation(Managers)
