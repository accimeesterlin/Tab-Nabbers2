import axios from "axios";
import {
  events
} from '../../utils/apiEndpoints';


export const eventBriteSearch = (name, {
  longitude,
  latitude
}) => {
  const endpoint = events;
  let params = `q=${name}`;

  if (latitude && longitude) {
    params += `&latitude=${latitude}&longitude=${longitude}`;
  }

  return {
    type: 'EVENTBRITE_SEARCH',
    payload: axios.get(endpoint + params)
  };
};


export const getValues = data => {
  return {
    type: "GET_VALUE",
    data
  };
};


export const getLocation = () => {
  return {
    type: "GET_LOCATION",
    payload: axios.get('http://api.ipstack.com/check?access_key=38d19681eff59a8adeabb2d081c5db6a')
  };
};