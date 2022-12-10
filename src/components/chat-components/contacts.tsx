import * as React from 'react';
import './contacts.scss';
import {useEffect, useState} from 'react';

type Props = {
    contacts: contact[];
    updateActiveChat: Function;
};

type contact = {
    name: string;
    number: number;
    lastMsg: string | null;
    imgSrc: string | undefined;
};

export const Contacts = ({contacts, updateActiveChat}: Props) => {
    const [contactsStringify, setContactStringify] = useState(JSON.stringify(contacts));

    useEffect(() => {
        if (contacts.length !== 0) updateActiveChat(contacts[contacts.length - 1].name);
    }, [contactsStringify]);

    const createFirstContact = (_name: string, _number: number) => {
        const newContact = {
            name: _name,
            number: _number,
            lastMsg: null,
            imgSrc: undefined,
        };
        contacts.push(newContact);

        setContactStringify(JSON.stringify(contacts));
    };

    function gotoChat(_name: string) {
        updateActiveChat(_name);
    }

    if (contacts.length !== 0) {
        return (
            <div className="contacts-container">
                {contacts.map((contact) => {
                    if (!!contact.imgSrc) {
                        return (
                            <div key={contact.number} className="contact" onClick={() => gotoChat(contact.name)}>
                                <img src={contact.imgSrc} alt="man" className="img" />
                                <h5>{contact.name}</h5>
                                <p>{contact.lastMsg ? contact.lastMsg : 'Lets start a conversation!'}</p>
                            </div>
                        );
                    } else {
                        return (
                            <div className="contact" key={contact.number} onClick={() => gotoChat(contact.name)}>
                                <img src="/src/assets/images/man.png" alt="man" className="img" />
                                <h5>{contact.name}</h5>
                                <p>{contact.lastMsg ? contact.lastMsg : 'Lets start a conversation!'}</p>
                            </div>
                        );
                    }
                })}
            </div>
        );
    } else {
        return (
            <div className="no-contact-container">
                <p onClick={() => createFirstContact('test', 0)}>Lets Create your first contact!</p>
            </div>
        );
    }
};
