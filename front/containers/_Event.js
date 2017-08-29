/**
 * Created by esterlingaccime on 7/13/17.
 */
import React from "react";
import {connect} from "react-redux";
import "../public/css/event.scss";

class Event extends React.Component{

    constructor(){
      super();
      this.state = {items: []};
    }

    componentDidMount(){
      fetch('https://api.meetup.com/find/groups?page=20&text=JavaScript&key=6b6f260644b44657a442955d383013&sig_id=197617558&sig=8742e95d91419cc26b093bd4070f2beba7415bf3')
        .then(response => response.json())
        .then(items => this.setState({items}))
        .catch(function(err){
          console.log(err);
        });
    }


    render(){
        let items = this.state.items;
        console.log(items);
        return(
            <div className="events">
                <h2 className="eventHeader">Meetup Events</h2>
                <br />
                {items.map((item, index) => (
                    <table key={index}>
                        <tbody>
                        {/*<img src={item.group_photo.photo_link} alt=""/>*/}
                        <tr key={item.name} className="list-group-item">
                            <h3 className="eventName">Name:&nbsp;{item.name}</h3>
                        </tr>
                        <tr key={item.city} className="list-group-item">
                            <h3 className="eventLocation">Location:&nbsp;</h3>{item.city},&nbsp;{item.state}
                        </tr>
                        <tr key={item.description} className="list-group-item">
                            <h3 className="eventDesc">Description:&nbsp;</h3>{item.description.slice(3, item.description.length - 4)}
                        </tr>
                        <tr key={item.link} className="list-group-item">
                            <h3 className="eventLink">Link:&nbsp; <a href={item.link} target="_blank">{item.link}</a></h3>
                        </tr>
                        <br />
                        <hr />
                        <br />
                        </tbody>
                    </table>
                ))}

            </div>
        );
    }
}

function mapStateToProps(state) {
    // here
    // Getting data from Redux here
    // and set pass it as props

}


export default connect(mapStateToProps)(Event);
