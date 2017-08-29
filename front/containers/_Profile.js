/**
 * Created by ea375w on 7/19/2017.
 */
import React from "react";
import "../public/css/profile.scss";
import About from "../components/About";
import Content from "../components/Content";
import {connect} from "react-redux";




class Profile extends React.Component {

    constructor(){
        super();

        this.state = {
            activeItem:'About'
        };

    }

    dataChanged = (data) => {
        console.log(data);

        this.setState({...data});
        console.log({...data});

        if(!data.activeItem){

            fetch.userUpdate({...data, userID: localStorage.getItem("userID")})
                .then(function(data) {
                    console.log(data);
                })
                .catch(function(err){
                    console.log(err);
                });
        }

    };

    handleItemClick = (e, { name }) => this.setState({ activeItem: name });

    render() {

        const [overview] = this.props.overview;

        var obj = {
            firstname:'Esterling',
            lastname:'Accime'
        };

        console.log(overview);

        return (
            <section className="profile">

                <About {...overview} dataChanged = {this.dataChanged} getIn = {this.getIn} />

                <Content {...overview} dataChanged = {this.dataChanged} handleItemClick={this.handleItemClick}/>

            </section>
        );
    }
}

function mapStateToProps(state) {
    return {
        overview: state.overview
    }
}
export default connect(mapStateToProps)(Profile);