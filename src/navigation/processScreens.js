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

    ProcessedScreen.screenOptions = Screen.screenOptions
  }

  if (ProcessedScreen.screenOptions && ProcessedScreen.screenOptions.modals) {
    const modals = ProcessedScreen.screenOptions.modals
    delete ProcessedScreen.screenOptions.modals

    ProcessedScreen = createModalScreen(ProcessedScreen, modals)
  }

  return ProcessedScreen
}

const screenId = 0

const getScreenLabel = Screen => {
  if (Screen.screenOptions) {
    return Screen.screenOptions.label || Screen.screenOptions.id
  }

  return screenId++
}

export default (Screens, mapFunction = Screen => Screen) => Screens.reduce((screensAccumulator, Screen) => ({
  ...screensAccumulator,
  [getScreenLabel(Screen)]: mapFunction(processScreen(Screen)),
}), {})
