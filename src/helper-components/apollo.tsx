import * as React from 'react';
import {ApolloClient, ApolloProvider, InMemoryCache} from '@apollo/client';
import {ChatSection} from '../components/chat-components/chat-section';

const client = new ApolloClient({
    uri: 'https://localhost:4000',
    cache: new InMemoryCache(),
});

type Props = {};

export const Apollo = (props: Props) => {
    return (
        <ApolloProvider client={client}>
            <ChatSection contact="admin" messages={[]} />
        </ApolloProvider>
    );
};
