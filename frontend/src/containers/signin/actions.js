import axios from 'axios';
import {
  signin
} from '../../utils/apiEndpoints';

export const login = data => {
  return {
    type: 'SIGNIN_IN',
    payload: axios({
      url: signin,
      method: 'POST',
      data
    })
  };
};

/**
 * Get values
 * @param {*} data
 */
export const getValues = data => {
  return {
    type: 'GET_VALUES_SIGNIN',
    data
  };
};