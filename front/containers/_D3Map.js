// This component is page related
// We should not do any heavy HTML here
// All of HTML Mocks up, needs to go to components folder
// and be imported below into JSX
// This component is mainly to get data from Redux Store
// and pass it to the dumb components in the components folder
// Every functions related to that page, need to be built in here
// and pass via props as well to the presentation components in the components folders

import React from "react";
import {connect} from "react-redux";

class D3Map extends React.Component {

    handleClick = () => {
        nodeOut();
        d3.select('#modal').style('display', 'none');
    };

    render() {
        return (
            <div className="container">
                <div className="view hm-black-strong" id = "dashboardCover">
                    <div className="full-bg-img flex-center">
                        <div className="d3container">
                            <div id="map"></div>
                            <div id="atlantaVis"></div>
                            <div id="modal">
                                <div id="content"></div><button id="modalClose" onClick={this.handleClick}>X</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


function mapStateToProps(state) {
    // here
    // Getting data from Redux here
    // and set pass it as props

}


export default connect(mapStateToProps)(D3Map);