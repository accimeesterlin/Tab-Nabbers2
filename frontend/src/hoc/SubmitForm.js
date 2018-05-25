import React from "react";
import { Message, Icon } from "semantic-ui-react";

const SubmitForm = WrappedComponent => {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {};
    }

    submit = event => {
      event.preventDefault();
      console.log("State: ", this.state);
      this.props.submitForm(this.state); // expected props 'submitForm'
    };

    handleChange = event => {
      const name = event.target.name;
      const value = event.target.value;

      const data = { [name]: value };

      this.setState(data);
      this.props.getValue(data); // expected props 'getvalue'
    };

    displayMessage = (status, error) => {
      let componentToRender;

      switch (status) {
        case "rejected":
          componentToRender = <Message error content={error} />;
          break;

        case "pending":
          componentToRender = (
            <Message icon>
              <Icon name="circle notched" loading />
              <Message.Content>
                <Message.Header>Just one second</Message.Header>
                We are fetching that content for you.
              </Message.Content>
            </Message>
          );
          break;

        case "fulfilled":
          componentToRender = (
            <Message success content="Login was successfully" />
          );
          break;

        default:
          componentToRender = "";
      }

      return componentToRender;
    };

    render() {
      return (
        <div>
          <WrappedComponent
            submit={this.submit}
            handleChange={this.handleChange}
            displayMessage={this.displayMessage}
            {...this.state}
            {...this.props}
          />
        </div>
      );
    }
  };
};
export default SubmitForm;
