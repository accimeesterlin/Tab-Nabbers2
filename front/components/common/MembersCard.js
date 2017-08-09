import React from "react";


class MemberCard extends React.Component {

    render() {

        const { imageUrl, name, techStack, description, linkedInBtn, githubBtn } = this.props.member;
        return (
            <div className="ui fluid blue card">
                <img className="ui image about-image" src={imageUrl}/>
                <div className="content">
                    <div className="header">{name}</div>
                    <div className="meta">{techStack}</div>
                    <div className="description">{description}</div>
                </div>
                <div className="extra content">
                    <div className="ui two buttons">
                        <button className="ui green basic button">{linkedInBtn}</button>
                        <button className="ui red basic button">{githubBtn}</button>
                    </div>
                </div>
            </div>
        )
    }
}


export default MemberCard;