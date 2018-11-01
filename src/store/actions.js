import screens from '@screens/list'
import { saveUser } from './user/actions'
import { saveManagerTips } from './managerTips/actions'

const makeAction = ({ response, navigation }) => (dispatch) => {
  let newManagerTips

  const { error, advice, rapper, result, updates } = response

  if (error) {
    newManagerTips = [error]
  } else {
    dispatch(saveUser(rapper))

    newManagerTips = [
      ...updates,
      ...advice,
    ]

    if (result !== null) {
      newManagerTips.push(result)
    }
  }

  dispatch(saveManagerTips(newManagerTips))

  if (navigation) {
    setTimeout(() => navigation.navigate(screens.MANAGER_TIP), 500)
  }
}

export {
  makeAction,
}
