import React from "react";


class Title extends React.Component {
    constructor(props){
        super(props)
    }

    render() {

        const { titleText, description } = this.props;
        if(!description){
            return (
                <div>
                    <h1 className="ui top attached center aligned block header color blue">{titleText}</h1>

                </div>
            )
        }else{
            return (
                <div>
                    <h1 className="ui top attached center aligned block header color blue">{titleText}</h1>
                    <div className="ui attached segment">{description}</div>
                </div>
            )
        }

    }
}


export default Title;