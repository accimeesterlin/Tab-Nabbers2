import { combineReducers } from "redux";

import user from "./user";
import reset_password from "../containers/resetpassword/reducer";
import signin from "../containers/signin/reducer";
import signup from "../containers/join/reducer";
import eventbrites from "../containers/events/reducer";
import new_password from "../containers/setNewPassword/reducer";
import profile from "../containers/profile/reducer";
import integrations from "../containers/integrations/reducer";
import getstarted from "../containers/getStarted/reducer";

const bootcruit = combineReducers({
  user,
  eventbrites,
  reset_password,
  signin,
  signup,
  new_password,
  profile,
  integrations,
  getstarted
});

export default bootcruit;
