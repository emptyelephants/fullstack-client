import {FETCH_CHEESE_REQUEST, FETCH_CHEESE_SUCCESS,FETCH_CHEESE_ERROR} from '../actions/cheese.js';

const initialState = {
  cheeses:[],
  loading:false,
  error:null
}

export default function cheeseReducer(state=initialState,action){
  switch (action.type) {
    case FETCH_CHEESE_REQUEST:
      return{
        ...state,
        loading:true
      }
    case FETCH_CHEESE_SUCCESS:
      return{
        ...state,
        cheeses:[action.cheeses],
        loading:false
      }
    case FETCH_CHEESE_ERROR:
      return{
        ...state,
        error:action.error
      }
    default:
      return state;

  }
}
