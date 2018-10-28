import screens from '@screens/list'
import { saveUser } from './user/actions'
import { saveManagerTips } from './managerTips/actions'


const makeAction = ({ navigation, response, showManagerTip = false }) => (dispatch) => {
  let newManagerTips

  const { error, advice, rapper, result, updates } = response

  if (error) {
    newManagerTips = [error]
  } else {
    dispatch(saveUser(rapper))

    newManagerTips = [
      ...updates,
      ...advice,
      result,
    ]
  }

  dispatch(saveManagerTips(newManagerTips))

  if (showManagerTip) {
    setTimeout(() => navigation.navigate(screens.MANAGER_TIP), 1000)
  }
}

export {
  makeAction,
}
