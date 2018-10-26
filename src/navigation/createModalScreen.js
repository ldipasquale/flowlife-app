import createStackNavigator from './createStackNavigator'

export default (Screen, modals) => {
  const ProcessedScreen = createStackNavigator([Screen, ...modals], {
    mode: 'modal',
    transparentCard: true,
    transitionConfig: () => ({
      screenInterpolator: () => ({
        opacity: 1,
      }),
    }),
  })

  ProcessedScreen.screenOptions = Screen.screenOptions

  return ProcessedScreen
}
