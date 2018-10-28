import React from 'react'
import { Provider } from 'react-redux'

import MainScreen from '@screens'
import store from '@store'

export default class MainApp extends React.PureComponent {
  render() {
    return (
      <Provider store={store}>
        <MainScreen />
      </Provider>
    )
  }
}
