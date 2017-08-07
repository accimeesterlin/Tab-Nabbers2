import React from "react";


class FeaturesCard extends React.Component {

    render() {

        const { imageUrl, title, description } = this.props.feature;
        return (
                <div className="ui fluid red card">
                    <img className="ui image about-image" src={imageUrl}/>
                    <div className="content">
                        <div className="header">{title}</div>
                        <div className="meta"></div>
                        <div className="description">{description}</div>
                    </div>
                </div>
        )
    }
}


export default FeaturesCard;