import * as React from 'react';
import {Message} from './message';
import './chat-section.scss';
import {TextInput} from './text-input';

type message = {
    text: string;
    id: number;
};

type Props = {
    contact: string;
};

export const ChatSection = ({contact}: Props) => {
    function getMessages(_contact: string) {
        return [];
    }

    const messages: message[] = getMessages(contact);
    return (
        <div className="chat-container">
            <h3 className="contact-name">{contact}</h3>
            {messages.map((message) => {
                return <Message msg={message.text} toWho={contact} key={message.id} />;
            })}
            <TextInput />
        </div>
    );
};
