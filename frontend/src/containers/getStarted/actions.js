import axios from 'axios';
import {
  github_endpoint
} from '../../utils/apiEndpoints';

export const handleChangeBasic = data => {
  return {
    type: 'HANDLE_CHANGE_BASIC',
    data
  };
};

export const submit = data => {
  return {
    type: '',
    payload: axios({
      url: '',
      method: 'POST',
      data
    })
  };
};

export const fetchGithubUsername = email => {
  return {
    type: 'FETCH_GITHUB_USERNAME',
    payload: axios({
      url: `${github_endpoint}/search/users?q=${email}`,
      method: 'GET'
    })
  };
};

export const fetchGithubProfile = username => {
  return {
    type: 'FETCH_GITHUB_PROFILE',
    payload: axios({
      url: `${github_endpoint}/users/${username}`,
      method: 'GET'
    })
  };
};