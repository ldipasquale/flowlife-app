import screens from '@screens/list'
import { saveUser } from './user/actions'
import { saveManagerTips } from './managerTips/actions'

const makeAction = ({ response, navigation, showManagerTip = true }) => (dispatch) => {
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

  if (navigation && (error || showManagerTip)) {
    setTimeout(() => navigation.navigate(screens.MANAGER_TIP), 1000)
  }
}

export {
  makeAction,
}
