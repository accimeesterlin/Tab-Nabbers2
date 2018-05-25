const initialState = {
  error: "Error Occurs",
  status: ""
};

const signup = (state = initialState, action) => {
  switch (action.type) {
    case "SIGN_UP_FULFILLED":
      return {
        ...state,
        status: "fulfilled"
      };
    case "SIGN_UP_REJECTED":
      const response = action.payload.response;
      const error = response.data.error;
      return {
        ...state,
        error,
        status: "rejected"
      };

    case "GET_VALUES_SIGNUP":
      return {
        ...state,
        status: ""
      };

    case "SIGN_UP_PENDING":
      return {
        ...state,
        status: "pending"
      };

    default:
      return state;
  }
};

export default signup;
