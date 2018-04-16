import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import "./getstarted.css";

const BasicInfo = () => {
  return (
    <form action="" className="ui form basic">
      <div className="field">
        <label>Add your github username</label>
        <input
          type="text"
          name="github_username"
          placeholder="Add your github username..."
        />
      </div>

      <div className="field">
        <label>Add a quick bio </label>
        <textarea name="summary" cols="30" rows="10" />
      </div>

      <Link to="/welcome/general">
        <button className="ui basic button">Next</button>
      </Link>
    </form>
  );
};

const GeneralInfo = () => {
  return (
    <div>
      <form action="" className="ui form basic general">
        <div className="field">
          <label>Are you currently looking for a job?</label>
          <input type="radio" name="job_status" value="yes" /> Yes <br />
          <input type="radio" name="job_status" value="no" /> No <br />
        </div>

        <div className="field">
          <label>Add your skills</label>
          <input type="text" name="skills" placeholder="add your skills" />
        </div>

        <div className="field">
          <label>Add a link to your social</label>
          <div className="ui labeled input">
            <div className="ui label">http://</div>
            <input type="text" name="github" placeholder="github" />
          </div>

          <div className="ui labeled input">
            <div className="ui label">http://</div>
            <input type="text" name="linkedin" placeholder="linkedin" />
          </div>

          <div className="ui labeled input">
            <div className="ui label">http://</div>
            <input type="text" name="portfolio" placeholder="portfolio" />
          </div>
        </div>

        <div className="buttons">
          <Link to="/welcome/basic">
            <button className="ui basic button">Previous</button>
          </Link>
          <Link to="/dashboard">
            <button className="ui basic button">Next</button>
          </Link>
        </div>
      </form>
    </div>
  );
};

class GetStarted extends Component {
  render() {
    const match = this.props.match.path;
    return (
      <div>
        <Route exact path={`${match}/basic`} component={BasicInfo} />
        <Route exact path={`${match}/general`} component={GeneralInfo} />
      </div>
    );
  }
}

export default GetStarted;
