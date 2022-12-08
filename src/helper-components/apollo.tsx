import * as React from 'react';
import {ApolloClient, ApolloProvider, InMemoryCache} from '@apollo/client';

const client = new ApolloClient({
    uri: 'https://localhost:4000',
    cache: new InMemoryCache(),
});

type Props = {};

export const Apollo = (props: Props) => {
    return (
        <ApolloProvider client={client}>
            <h2>Hey there</h2>
        </ApolloProvider>
    );
};
