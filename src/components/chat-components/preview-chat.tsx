import * as React from 'react';

type Props = {
    profilePictureSrc: string;
    name: string;
    lastMessage: string;
};
export const PreviewChat = ({profilePictureSrc = '/', name, lastMessage}: Props) => {
    return (
        <div className="preview-chat">
            <img src={profilePictureSrc} alt="contact-profile" />
            <h2 className="name">{name}</h2>
            <p className="last-message">{lastMessage}</p>
        </div>
    );
};
