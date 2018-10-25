import createStackNavigator from './createStackNavigator'

export default (Screen, modals) => createStackNavigator([Screen, ...modals], {
  mode: 'modal',
  transparentCard: true,
  transitionConfig: () => ({
    screenInterpolator: () => ({
      opacity: 1,
    }),
  }),
})
