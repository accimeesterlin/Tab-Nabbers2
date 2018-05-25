const initialState = {
  error: "Error Occurs",
  status: "" // rejected, pending, fulfilled
};

const signin = (state = initialState, action) => {
  switch (action.type) {
    case "SIGNIN_IN_FULFILLED":
      return {
        ...state,
        status: "fulfilled",
        error: {}
      };

    case "GET_VALUES_SIGNIN":
      return {
        ...state,
        status: ""
      };
    case "SIGNIN_IN_REJECTED":
      const response = action.payload.response;
      const error = response.data.error;

      return {
        ...state,
        error,
        status: "rejected"
      };
    case "SIGNIN_IN_PENDING":
      return {
        ...state,
        error: {},
        status: "pending"
      };

    default:
      return state;
  }
};

export default signin;
