import BasicUI from "./BasicUI";
import { connect } from "react-redux";
import {
  fetchGithubProfile,
  fetchGithubUsername,
  handleChangeBasic,
  submit
} from "./actions";
import SubmitForm from "../../hoc/SubmitForm";

const SubmitBasicUI = SubmitForm(BasicUI); // HOC

const mapPropToState = state => {
  const github = state.user.github;

  const bio = github.bio;
  const avatar_url = github.avatar_url;
  const location = github.location;
  const username = github.login || "";
  const status = state.getstarted.status;
  const isGithubActive = state.user.isGithubActive;

  return {
    user: state.user,
    username,
    status,
    isGithubActive,
    bio,
    avatar_url,
    location
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchGithubUsername: email => dispatch(fetchGithubUsername(email)),
    fetchGithubProfile: username => dispatch(fetchGithubProfile(username)),
    getValue: data => dispatch(handleChangeBasic(data)),
    submitForm: data => dispatch(submit(data))
  };
};

const BasicInfo = connect(mapPropToState, mapDispatchToProps)(SubmitBasicUI);

export default BasicInfo;
