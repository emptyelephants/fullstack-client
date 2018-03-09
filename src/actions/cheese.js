import {API_BASE_URL} from '../config.js'
export const FETCH_CHEESE_REQUEST = 'FETCH_CHEESE_REQUEST'
export const fetchCheesesRequest = () => ({
  type:FETCH_CHEESE_REQUEST
})

export const FETCH_CHEESE_SUCCESS = 'FETCH_CHEESE_SUCCESS'
export const fetchCheesesSuccess = (cheeses) => ({
  type:FETCH_CHEESE_SUCCESS,
  cheeses

})

export const FETCH_CHEESE_ERROR = 'FETCH_CHEESE_ERROR'
export const fetchCheesesError = (error) => ({
  type:FETCH_CHEESE_ERROR,
  error
})


export const fetchCheeses =  () => dispatch => {
  dispatch(fetchCheesesRequest());
  fetch(`${API_BASE_URL}/cheeses`)
  .then((res) => dispatch(fetchCheesesSuccess(res)))
  .catch((err) => dispatch(fetchCheesesError(err)));
}
