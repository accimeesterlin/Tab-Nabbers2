const initialState = {
  status: ""
};

const reducers = (state = initialState, action) => {
  switch (action) {
    case "FETCH_GITHUB_PROFILE_FULFILLED":
      return {
        ...state,
        status: "fulfilled"
      };

    case "FETCH_GITHUB_PROFILE_REJECTED":
      return {
        ...state,
        status: "rejected"
      };

    case "FETCH_GITHUB_PROFILE_PENDING":
      return {
        ...state,
        status: "pending"
      };

    default:
      return state;
  }
};

export default reducers;
