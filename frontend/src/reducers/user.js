const initial_state = {
  authenticated: false,
  pending: false,
  isGithubActive: false,
  search: '',
  email: "",
  github: {
    avartar_url: "",
    login: "",
    bio: "",
    hireable: false,
    name: "",
    location: "",
    created_at: "",
    id: 0,
    followers: 0,
    public_repos: 0
  }
};

const user = (state = initial_state, action) => {
  switch (action.type) {
    case "LOGOUT":
      return {
        ...state,
        authenticated: false
      };

    case "GET_VALUE":
    case "GET_VALUES_SIGNUP":
    case "GET_VALUES_SIGNIN":
      return {
        ...state,
        ...action.data
      };

    case "SIGNIN_IN_FULFILLED":
    case "SIGN_UP_FULFILLED":
      return {
        ...state,
        authenticated: true
      };

    case "GET_LOCATION_FULFILLED":
      return {
        ...state,
        location: { ...action.payload.data
        }
      };

    case "FETCH_GITHUB_PROFILE_FULFILLED":
      return {
        ...state,
        github: { ...action.payload.data
        }
        // isGithubActive: true
      };

    case "HANDLE_CHANGE_BASIC":
      return {
        ...state,
        github: {
          ...state.github,
          ...action.data
        }
      };

    case 'EVENTBRITE_SEARCH_FULFILLED':
    case 'EVENTBRITE_SEARCH_PENDING':
    case 'EVENTBRITE_SEARCH_REJECTED':
      return {
        ...state,
        search: ''
      };

    default:
      return state;
  }
};

export default user;