import types from './types'

const initialState = []

export default function (state = initialState, action) {
  switch (action.type) {
    case types.PUSH:

      if (action.payload.managerTips.length === 0) {
        return state
      }

      return [
        ...state,
        ...action.payload.managerTips,
      ]

    case types.POP:
      if (state.length === 0) {
        return state
      }

      return state.slice(0, -1)

    default:
      return state
  }
}
