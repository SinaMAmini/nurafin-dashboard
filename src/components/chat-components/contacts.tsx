import * as React from 'react';
import './contacts.scss';
import {useEffect, useState} from 'react';

type Props = {
    contacts: contact[];
    updateContacts: Function;
};

type contact = {
    name: string;
    number: number;
    lastMsg: string | null;
    imgSrc: string | undefined;
};

export const Contacts = ({contacts, updateContacts}: Props) => {
    const [contactsStringify, useContactStringify] = useState(JSON.stringify(contacts));

    useEffect(() => {
        updateContacts(contacts);
    }, [contactsStringify]);

    const createFirstContact = (_name: string, _number: number) => {
        const newContact = {
            name: _name,
            number: _number,
            lastMsg: null,
            imgSrc: undefined,
        };
        contacts.push(newContact);

        useContactStringify(JSON.stringify(contacts));
    };

    if (contacts.length !== 0) {
        return (
            <div className="contacts-container">
                {contacts.map((contact) => {
                    if (!!contact.imgSrc) {
                        return (
                            <div key={contact.number} className="contact">
                                <img src="/src/assets/images/man.png" alt="man picture" />
                                <h5>{contact.name}</h5>
                                <p>{contact.lastMsg ? contact.lastMsg : 'Lets start a conversation!'}</p>
                            </div>
                        );
                    } else {
                        return (
                            <div className="contact" key={contact.number}>
                                <img src={contact.imgSrc} alt="contact image" />
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
