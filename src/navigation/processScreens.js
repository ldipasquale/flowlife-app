import React from 'react'

import services from '@services'

import createModalScreen from './createModalScreen'

const processScreen = Screen => {
  let ProcessedScreen = Screen

  if (Screen.entities) {
    ProcessedScreen = class extends React.PureComponent {
      constructor(props) {
        super(props)

        this.state = {
          entities: {},
          isFetching: true,
        }
      }

      async componentDidMount() {
        const entitiesData = await Promise.all(Screen.entities.map(entityId => services[entityId].get()))

        const entities = Screen.entities.reduce((entitiesAccumulator, entityId, entityIndex) => ({
          ...entitiesAccumulator,
          [entityId]: entitiesData[entityIndex],
        }), {})

        return this.setState({
          entities,
          isFetching: false,
        })
      }

      render() {
        const { entities, isFetching } = this.state

        return (
          <Screen
            {...this.props}
            {...entities}
            isFetching={isFetching}
          />
        )
      }
    }

    ProcessedScreen.navigationOptions = Screen.navigationOptions
  }

  if (ProcessedScreen.navigationOptions && ProcessedScreen.navigationOptions.modals) {
    const modals = ProcessedScreen.navigationOptions.modals
    delete ProcessedScreen.navigationOptions.modals

    ProcessedScreen = createModalScreen(ProcessedScreen, modals)
  }

  return ProcessedScreen
}

const screenId = 0

const getScreenLabel = Screen => {
  if (Screen.navigationOptions) {
    return Screen.navigationOptions.label || Screen.navigationOptions.id
  }

  return screenId++
}

export default (Screens, mapFunction = Screen => Screen) => Screens.reduce((screensAccumulator, Screen) => ({
  ...screensAccumulator,
  [getScreenLabel(Screen)]: mapFunction(processScreen(Screen)),
}), {})
