// This component is page related
// We should not do any heavy HTML here
// All of HTML Mocks up, needs to go to components folder
// and be imported below into JSX
// This component is mainly to get data from Redux Store
// and pass it to the dumb components in the components folder
// Every functions related to that page, need to be built in here
// and pass via props as well to the presentation components in the components folders


import React from "react";
import "../public/css/profile.scss";
import "../public/css/footer.scss";
import {connect} from "react-redux";
import { Grid, Segment, Header, Image, Rail, Sticky } from 'semantic-ui-react';
import Footer from "../components/common/Footer";
class Profile extends React.Component {

    constructor(){
        super();

    }

    render() {
        // JSX goes below
        return (
            <section className="profile">
                <Footer />
            </section>
        );
    }
}

function mapStateToProps(state) {
    // here
    // Getting data from Redux here
    // and set pass it as props
}
export default connect(mapStateToProps)(Profile);
