import { createSwitchNavigator } from 'react-navigation'

export default ({ auth, app }) => isSignedIn => createSwitchNavigator({
  [auth.id]: auth.Screen,
  [app.id]: app.Screen,
}, {
  initialRouteName: isSignedIn ? app.id : auth.id,
})
