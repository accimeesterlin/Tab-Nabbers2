import React from "react";
import Title from './common/Title';
import css from "../public/css/about.scss";

class Contact extends React.Component {

   render() {
        return (
            <div className="container">

                <div className="ui hidden divider"></div>
                <div className="header">
                    <Title titleText="Contact Us"
                    description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident fuga animi architecto dolores dicta cum quo velit." />
                </div>
                <div className="ui hidden divider"></div>
                <div className="ui divided two column grid">
                    <div className="row">
                        <div className="column">
                            <div className="ui inverted segment">
                                <form className="ui inverted form">
                                        <div className="field">
                                            <label>Name</label>
                                            <div className="ui input">
                                                <input type="text" placeholder="First and Last Name"/>
                                            </div>
                                        </div>
                                        <div className="field">
                                            <label>Email</label>
                                            <div className="ui input">
                                                <input type="text" placeholder="Email"/>
                                            </div>
                                        </div>
                                        <div className="field">
                                            <label>Message</label>
                                            <div className="ui input">
                                                <input type="text" placeholder="Message"/>
                                            </div>
                                        </div>
                                    <button type="submit" className="ui button">Submit</button>
                                </form>
                            </div>
                        </div>

                        <div role="list" className="ui list">
                        <div role="listitem" className="item">
                          <i aria-hidden="true" className="users icon"></i>
                          <div className="content">BootCruit</div>
                        </div>
                        <div role="listitem" className="item">
                          <i aria-hidden="true" className="marker icon"></i>
                          <div className="content">Atlanta, GA</div>
                        </div>
                        <div role="listitem" className="item">
                          <i aria-hidden="true" className="mail icon"></i>
                          <div className="content">
                            <a href="mailto:jack@semantic-ui.com">contact@bootcruit.com</a>
                          </div>
                        </div>
                        <div role="listitem" className="item">
                          <i aria-hidden="true" className="linkify icon"></i>
                          <div className="content">
                            <a href="http://www.bootcruit.com">BootCruit.com</a>
                          </div>
                        </div>
                      </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact;
