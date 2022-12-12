import React, { Component } from 'react'
import { useEffect } from 'react';
import { Widget, addResponseMessage } from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';

export default class WidgetX extends Component {
    componentDidMount() {
        addResponseMessage('Welcome to this awesome chat!');
        //setQuickButtons(buttons);
    }

    handleNewUserMessage = (newMessage) => {
        //console.log(`New message incoming! ${newMessage}`);
        //addResponseMessage(newMessage);
        //setShow(!show);

    }
    render() {
        return (
            <div>
                <Widget
                    handleNewUserMessage={this.handleNewUserMessage}
                    //profileAvatar={logo}
                    //handleQuickButtonClicked={handleQuickButtonClicked}
                    title="My new awesome title"
                    subtitle="And my cool subtitle"
                /></div>
        )
    }

}
