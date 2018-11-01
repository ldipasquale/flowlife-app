import types from './types'

const saveUser = user => ({
  type: types.SAVE,
  payload: {
    user,
  },
})

const cleanUser = () => ({
  type: types.CLEAN,
})

export {
  saveUser,
  cleanUser,
}
