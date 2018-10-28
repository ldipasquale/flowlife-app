import React from 'react'
import PropTypes from 'prop-types'

import { View, ScrollView } from 'react-native'

import Header from './Header'
import Manager from './Manager'

import styles from './styles'

class App extends React.PureComponent {
  render() {
    const { children, disableHeader, disableManager, avatarUrl } = this.props

    return (
      <View style={styles.background}>
        {!disableManager && (
          <Manager />
        )}

        <View style={styles.container}>
          {!disableHeader && (
            <Header avatarUrl={avatarUrl} />
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
  disableHeader: PropTypes.bool,
  disableManager: PropTypes.bool,
  avatarUrl: PropTypes.string,
}

App.defaultProps = {
  disableHeader: false,
  disableManager: false,
  avatarUrl: null,
}

export default App
