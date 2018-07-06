import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import {
    Header,
    Footer
} from "../../components";
import features from './listFeatures.json';

class DashboardUI extends Component {

    listFeatures = () => {
        return features.map((feature, index) => (
            <Link to={feature.link}> <Button key={index} basic> {feature.title}</Button> </Link>
        ));
    };


    render() {
        return (
            <div className='dashboard'>
                <Header />
                <div className="dashboard__features">
                    {this.listFeatures()}
                </div>
                <Footer />
            </div>
        )
    }
}
export default DashboardUI