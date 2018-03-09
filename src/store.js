import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import cheeseReducer from './reducers/cheeses.js'


export default createStore(
  cheeseReducer,
  applyMiddleware(thunk)
)
