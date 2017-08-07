import React from "react";
import MemberCard from './MembersCard';
import FeatureCard from './FeaturesCard';
import Title from './Title';
import css from "../public/css/about.scss";

class About extends React.Component {

    constructor(props){
        super(props);
        this.state= {
            members: [{
                imageUrl: "https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAluAAAAJGIyYjRlMWQ1LTMxYTUtNDgxOC1iY2RiLTAxMzcxZGFlNTk5Zg.jpg",
                name: "Esterling Accime",
                techStack: "Full Stack Web Developer",
                description: "I am passionate about big ideas that improve personal experiences and interactions online. The web is a gateway to the world where information is shared that has the power to change lives. One online experience, one online interaction at a time.",
                linkedInBtn: "LinkedIn",
                githubBtn: "Github"
            }, {
                imageUrl: "https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAkEAAAAJDU5NWE0OThhLTEyNTAtNDcxZi05NGJjLTRmZGE5ZTFmNTdhOA.jpg",
                name: "Cody Brannon",
                techStack: "Full Stack Web Developer",
                description: "I am passionate about big ideas that improve personal experiences and interactions online. The web is a gateway to the world where information is shared that has the power to change lives. One online experience, one online interaction at a time.",
                linkedInBtn: "LinkedIn",
                githubBtn: "Github"
            }, {
                imageUrl: "https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAt0AAAAJDI1ODdhYWE0LTg2YmEtNDA4MC05MTNmLTM4MDNjOTg3ODBmNg.jpg",
                name: "Ashley MacWhirter",
                techStack: "Full Stack Web Developer",
                description: "I am passionate about big ideas that improve personal experiences and interactions online. The web is a gateway to the world where information is shared that has the power to change lives. One online experience, one online interaction at a time.",
                linkedInBtn: "LinkedIn",
                githubBtn: "Github"
            }, {
                imageUrl: "https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-9/300027_10100381313112389_2058019734_n.jpg?oh=583f23fa1cfac65edf60890809178093&oe=59C473FC",
                name: "Eric Gaupp",
                techStack: "Full Stack Web Developer",
                description: "I am passionate about big ideas that improve personal experiences and interactions online. The web is a gateway to the world where information is shared that has the power to change lives. One online experience, one online interaction at a time.",
                linkedInBtn: "LinkedIn",
                githubBtn: "Github"
            }],
            features:[{
                imageUrl: "https://cdn.pixabay.com/photo/2015/01/08/18/25/startup-593327_1280.jpg",
                title: "360 Advertising",
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident fuga animi architecto dolores dicta cum quo velit.",
            }, {
                imageUrl: "https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849825_1280.jpg",
                title: "Top-Class Team",
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident fuga animi architecto dolores dicta cum quo velit.",
            }, {
                imageUrl: "https://cdn.pixabay.com/photo/2015/01/21/14/14/macbook-606763_1280.jpg",
                title: "Newest Technologies",
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident fuga animi architecto dolores dicta cum quo velit.",
            }, {
                imageUrl: "https://cdn.pixabay.com/photo/2016/03/26/13/09/organic-1280537_1280.jpg",
                title: "24/7 Support",
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident fuga animi architecto dolores dicta cum quo velit.",
            }],
        }
    }

    renderHelperMembers(members){
        return(
            members.map(member=> <MemberCard member={member} key={member.name} />
            )
        )
    }

    renderHelperFeatures(features){
        return(
            features.map(feature=> <FeatureCard feature={feature} key={feature.title} />
            )
        )
    }
    render() {
        return (
            <div className="container">
                <div className="ui hidden divider"></div>
                <div className="header">
                                       <Title titleText="Meet the Team" description="Meet the current full-stack development bootcampers who brought you BootCruit! Graduating from Georgia Tech Coding Bootcamp: Cohort 1 in July 2017, this team collaborated their newly developed skills and experience to create an app which brings recruiters and bootcampers together with a single click."/>
                </div>
                <div className="ui hidden divider"></div>
                <div className="ui four stackable cards">

                    {this.renderHelperMembers(this.state.members)}

                </div>
                <div className="ui hidden divider"></div>
                                <Title titleText="BootCruit Features" />
                <div className="ui four stackable cards">

                    {this.renderHelperFeatures(this.state.features)}


                </div>
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

export default About;
