import types from './types'

const saveUser = user => ({
  type: types.SAVE,
  payload: {
    user,
  },
})

export {
  saveUser,
}
