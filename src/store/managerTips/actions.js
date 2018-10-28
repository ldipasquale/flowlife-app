import types from './types'

const saveManagerTips = managerTips => ({
  type: types.PUSH,
  payload: {
    managerTips,
  },
})

const popTip = () => ({
  type: types.POP,
})

export {
  saveManagerTips,
  popTip,
}
