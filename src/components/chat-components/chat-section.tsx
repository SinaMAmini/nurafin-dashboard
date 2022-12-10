import * as React from 'react';
import {Message} from './message';

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
        <div>
            {messages.map((message) => {
                return <Message msg={message.text} toWho={contact} key={message.id} />;
            })}
        </div>
    );
};
