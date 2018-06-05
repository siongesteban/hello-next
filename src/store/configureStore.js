import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import counterReducer from '../reducers/counter'
import { counterInitialState } from '../reducers/counter'

// Initial state for server rendering
const initialState = {
  counter: { ...counterInitialState }
}

export default (state = initialState) => {
  const store = createStore(
    combineReducers({
      counter: counterReducer
    }),
    state,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  )

  return store
}