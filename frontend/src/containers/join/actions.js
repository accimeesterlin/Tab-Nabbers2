import axios from "axios";
import { dev_endpoint } from "../../utils/api";
const { signup_url } = dev_endpoint;

export const getValues = data => {
  return {
    type: "GET_VALUES_SIGNUP",
    data
  };
};

export const signup = data => {
  return {
    type: "SIGN_UP",
    payload: axios({
      url: signup_url,
      method: "POST",
      data
    })
  };
};
