import React from 'react'
import PropTypes from 'prop-types'

import { SafeAreaView, View, ScrollView } from 'react-native'

import Header from './Header'
import Manager from './Manager'

import styles from './styles'

class App extends React.PureComponent {
  render() {
    const { children, disableHeader, disableManager, avatarUrl, withPadding } = this.props

    return (
      <SafeAreaView style={styles.appContainer}>
        <View style={styles.background}>
          {!disableManager && (
            <Manager />
          )}

          <View style={styles.container}>
            {!disableHeader && (
              <Header avatarUrl={avatarUrl} />
            )}

            <ScrollView
              style={[
                styles.content,
                withPadding && styles.contentWithPadding,
              ]}
              contentContainerStyle={styles.contentContainer}
            >
              {children}
            </ScrollView>
          </View>
        </View>
      </SafeAreaView>
    )
  }
}

App.propTypes = {
  children: PropTypes.node.isRequired,
  disableHeader: PropTypes.bool,
  disableManager: PropTypes.bool,
  avatarUrl: PropTypes.string,
  withPadding: PropTypes.bool,
}

App.defaultProps = {
  disableHeader: false,
  disableManager: false,
  avatarUrl: null,
  withPadding: true,
}

export default App
