import React from 'react'
import PropTypes from 'prop-types'

import { View, ScrollView } from 'react-native'

import Header from './Header'
import Manager from './Manager'

import styles from './styles'

class App extends React.PureComponent {
  render() {
    const { children, leftIcon, getOnPressLeftIcon, disableHeader, disableManager } = this.props

    return (
      <View style={styles.background}>
        {!disableManager && (
          <Manager />
        )}

        <View style={styles.container}>
          {!disableHeader && (
            <Header
              avatarUrl="https://banner2.kisspng.com/20180616/gks/kisspng-roblox-avatar-rapper-clip-art-cadea-carbonada-5b255cb41c2623.2620842815291752201153.jpg"
              leftIcon={leftIcon}
              getOnPressLeftIcon={getOnPressLeftIcon}
            />
          )}

          <ScrollView
            style={styles.content}
            contentContainerStyle={styles.contentContainer}
          >
            {children}
          </ScrollView>
        </View>
      </View>
    )
  }
}

App.propTypes = {
  children: PropTypes.node.isRequired,
  leftIcon: PropTypes.string,
  getOnPressLeftIcon: PropTypes.func,
  disableHeader: PropTypes.bool,
  disableManager: PropTypes.bool,
}

App.defaultProps = {
  leftIcon: undefined,
  getOnPressLeftIcon: undefined,
  disableHeader: false,
  disableManager: false,
}

export default App
