import axios from "axios";
import { dev_endpoint } from "../../utils/api";

const { signin_url } = dev_endpoint;

export const login = data => {
  return {
    type: "SIGNIN_IN",
    payload: axios({
      url: signin_url,
      method: "POST",
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
    type: "GET_VALUES_SIGNIN",
    data
  };
};
