import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { Sidebar, Segment, Button, Menu, Image, Icon, Header } from 'semantic-ui-react'
import Footer from "./common/Footer";

import css from "../public/css/main.scss";


class Main extends Component {
    state = { visible: false }

    toggleVisibility = () => this.setState({ visible: !this.state.visible })

    handleClickHome = () => {
        browserHistory.push('/');
        this.setState({ visible: false });
    };

    handleClickAbout = () => {
        browserHistory.push('/About');
        this.setState({ visible: false });
    };

    handleClickFeatures = () => {
        browserHistory.push('/Features');
        this.setState({ visible: false });
    };

    handleClickContact = () => {
        browserHistory.push('/Contact');
        this.setState({ visible: false });
    };

    render() {
        const { visible } = this.state
        return (
            <div>
        <Segment inverted clearing>
          <Button onClick={this.toggleVisibility} size='medium' icon color='blue' floated='left'><Icon name='content' /></Button>
          <Header as='h2' floated='right' inverted color='blue'>
            BootCruit
          </Header>

      </Segment>

        <Sidebar.Pushable as={Segment}>
          <Sidebar as={Menu} animation='slide out' width='thin' visible={visible} icon='labeled' vertical inverted>
            <Menu.Item name='home'>
              <Icon name='home' />
              <Button onClick={this.handleClickHome} basic inverted color='blue'>Home</Button>
            </Menu.Item>
            <Menu.Item name='users'>
              <Icon name='users' />
              <Button onClick={this.handleClickAbout} basic inverted color='blue'>About</Button>
            </Menu.Item>
            <Menu.Item name='lightning'>
              <Icon name='lightning' />
              <Button onClick={this.handleClickFeatures} basic inverted color='blue'>Features</Button>
            </Menu.Item>
            <Menu.Item name='mail'>
              <Icon name='mail' />
              <Button onClick={this.handleClickContact} basic inverted color='blue'>Contact</Button>
            </Menu.Item>
          </Sidebar>
          <Sidebar.Pusher>
            <Segment basic>
              {this.props.children}
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      <Footer />
      </div>
        )
    }
}

export default Main;
