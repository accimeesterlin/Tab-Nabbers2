import axios from 'axios';
import {
  signup_url
} from '../../utils/apiEndpoints';

export const getValues = data => {
  return {
    type: 'GET_VALUES_SIGNUP',
    data
  };
};

export const signup = data => {
  return {
    type: 'SIGN_UP',
    payload: axios({
      url: signup_url,
      method: 'POST',
      data
    })
  };
};