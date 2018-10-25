import { createStackNavigator } from '@navigation'

import SignUp from './SignUp'
import SignIn from './SignIn'

const Screens = [SignUp, SignIn]

export default createStackNavigator(Screens, {
  initialRouteName: SignIn.navigationOptions.label,
})
