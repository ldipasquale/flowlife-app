import types from './types'

const initialState = {hola:'chau'}

export default function (state = initialState, action) {
  switch (action.type) {
    case types.SAVE:
      return action.payload.user

    default:
      return state
  }
}
