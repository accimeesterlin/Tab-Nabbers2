import React from "react";
import MemberCard from './common/MembersCard';
import FeatureCard from './common/FeaturesCard';
import Title from './common/Title';
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

        }
    }

    renderHelperMembers(members){
        return(
            members.map(member=> <MemberCard member={member} key={member.name} />
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

            </div>
        )
    }
}

export default About;
