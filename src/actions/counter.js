import {
  TICK,
  INCREMENT,
  DECREMENT,
  RESET
} from './constants/counter'

export const serverRenderClock = (isServer) => {
  return dispatch => {
    return dispatch({ type: TICK, light: !isServer, ts: Date.now() })
  }
}

export const startClock = dispatch => {
  return setInterval(() => {
    // Dispatch `TICK` every 1 second
    dispatch({ type: TICK, light: true, ts: Date.now() })
  }, 1000)
}

export const incrementCount = () => dispatch => {
  return dispatch({ type: INCREMENT })
}

export const decrementCount = () => dispatch => {
  return dispatch({ type: DECREMENT })
}

export const resetCount = () => dispatch => {
  return dispatch({ type: RESET })
}