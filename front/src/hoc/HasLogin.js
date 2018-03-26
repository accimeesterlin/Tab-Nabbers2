import React from 'react';

const mainJoin = (methods, name, url) => (WrappedComponent) => {
    class MainJoin extends React.Component {
        constructor(props) {
            super(props);
            this.state = {};
        }

        submit = (event) => {
            event.preventDefault();
            const {
                email,
                password,
                name
            } = this.props.user;

            this.props.dispatch(methods.joinOrLogin(url, {
                email,
                password,
                name
            }));
        };

        getValues = ({
            target: {
            name,
            value
        } }) => {
            const data = { [name]: value };
            this.props.dispatch(methods.getValues(data));
        };


        componentWillReceiveProps(props) {
            if (props.user.authenticated)
                this.props.history.push('/dashboard');
        }


        render() {
            return (
                <div className="credentials">
                    <WrappedComponent
                        submit={this.submit}
                        name = {name}
                        getValues={this.getValues}
                        {...this.state}
                        {...this.props} />
                </div>
            );
        }
    };

    return MainJoin;

}
export default mainJoin;