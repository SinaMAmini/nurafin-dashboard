import * as React from 'react';
import {Message} from './message';

type message = {
    text: string;
    id: number;
};

type Props = {
    contact: string;
    messages: message[];
};

export const ChatSection = ({messages, contact}: Props) => {
    return (
        <div>
            {messages.map((message) => {
                return <Message msg={message.text} toWho={contact} key={message.id} />;
            })}
        </div>
    );
};
