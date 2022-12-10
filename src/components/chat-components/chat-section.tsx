import * as React from 'react';
import {Message} from './message';
import './chat-section.scss';
import {TextInput} from './text-input';
import {useState} from 'react';

type message = {
    text: string;
    id: number;
};

type Props = {
    contact: string;
};

export const ChatSection = ({contact}: Props) => {
    const [val, setVal] = useState('');

    function getMessages(_contact: string) {
        return [];
    }

    const messages: message[] = getMessages(contact);

    function sendMsg() {}

    return (
        <div className="chat-container">
            <h3 className="contact-name">{contact}</h3>
            {messages.map((message) => {
                return <Message msg={message.text} toWho={contact} key={message.id} />;
            })}
            <button className="send-btn" onClick={() => sendMsg()}>
                Send
            </button>
            <TextInput val={val} setVal={setVal} />
        </div>
    );
};
