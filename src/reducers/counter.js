import {
  TICK,
  INCREMENT,
  DECREMENT,
  RESET
} from '../actions/constants/counter'

export const counterInitialState = {
  lastUpdate: 0,
  light: false,
  count: 0
}

export default (state = counterInitialState, action) => {
  switch (action.type) {
    case TICK:
      return {
        ...state,
        lastUpdate: action.ts,
        light: !!action.light
      }
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1
      }
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1
      }
    case RESET:
      return {
        ...state,
        count: counterInitialState.count
      }
    default:
      return state
  }
}