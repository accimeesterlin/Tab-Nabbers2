import React from "react";
import FeatureCard from './common/FeaturesCard';
import Title from './common/Title';
import css from "../public/css/about.scss";

class Features extends React.Component {

    constructor(props){
        super(props);
        this.state= {

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
                                <Title titleText="BootCruit Features" />
                <div className="ui hidden divider"></div>
                <div className="ui four stackable cards">


                    {this.renderHelperFeatures(this.state.features)}


                </div>
            </div>
        )
    }
}

export default Features;
