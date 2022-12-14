import * as React from 'react';
import {Welcome} from './sections-components/welcome';
import './sections-container.scss';
import {SmallInfo} from './sections-components/small-info';
import {useState} from 'react';
import {Diagram} from './sections-components/diagram';
import {option1, option2} from '../utlts/highchart-options';
import {Apollo} from '../helper-components/apollo';
import {TodoList} from './sections-components/todo-list';
import {todoListExample} from '../utlts/todo-list-example';
import {Contacts} from './chat-components/contacts';

export const SectionsContainer = () => {
    const [tradeGain, setTradeGain] = useState([
        {subtitle: 'This year', amount: 3.05},
        {subtitle: 'This month', amount: 2.86},
        {subtitle: 'Today', amount: 0.01},
    ]);

    const [signal, setSignal] = useState([
        {subtitle: 'Total Signals', amount: 4122},
        {subtitle: 'Your Signals', amount: 1234},
    ]);

    const [contacts, setContacts] = useState([]);

    const [activeContactName, setActiveContactName] = useState('');

    return (
        <div className="sections-container">
            <h2 className="page-title">Dashboard</h2>
            <Welcome />
            <SmallInfo title="Trade Gain" infos={tradeGain} wordAfterLabel="%" bc="blue" />
            <SmallInfo title="Signals" infos={signal} bc="purple" />
            <TodoList todoList={todoListExample} />
            <Diagram options={option1} />
            <Diagram options={option2} />
            <Contacts contacts={contacts} updateActiveChat={setActiveContactName} />
            <Apollo activeContact={activeContactName} />
        </div>
    );
};
