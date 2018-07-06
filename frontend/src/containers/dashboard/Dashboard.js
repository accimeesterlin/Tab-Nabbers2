import "./dashboard.css";


import {
    connect
} from "react-redux";

import {
    logout
} from "../../actions";
import DashboardUI from './DashboardUI';

const mapStateToProps = (state) => {
    return {
        eventbrites: state.eventbrites
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => dispatch(logout()),
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(DashboardUI);