import * as React from 'react';
import {Message} from './message';
import './chat-section.scss';
import {TextInput} from './text-input';
import {useEffect, useState} from 'react';
import {Contact} from '../../interfaces/contact';

type message = {
    text: string;
    id: number;
};

type Props = {
    contactName: string;
};

export const ChatSection = ({contactName}: Props) => {
    const [val, setVal] = useState('');

    function getMessages(_contact: string) {
        return [];
    }

    const [messages, setMessages]: [message[], Function] = useState([]);

    function sendMsg() {
        const newMessage = {
            text: val,
            id: messages.length,
        };

        messages.push(newMessage);
    }

    useEffect(() => {}, [messages]);

    return (
        <div className="chat-container">
            <h3 className="contact-name">{contactName}</h3>
            {messages.map((message) => {
                return <Message msg={message.text} toWho={contactName} key={message.id} />;
            })}
            <button className="send-btn" onClick={() => sendMsg()}>
                Send
            </button>
            <TextInput val={val} setVal={setVal} />
        </div>
    );
};
