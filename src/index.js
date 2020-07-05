import React from 'react';
import ReactDOM from 'react-dom';
import {ApolloClient, InMemoryCache, ApolloProvider, ApolloLink, HttpLink} from '@apollo/client';
import resolvers from './gql/resolvers';
import App from './App';
import './index.scss';

const cache = new InMemoryCache();
const stateLink = withClientState({
  cache,
  resolvers
});
const link = new HttpLink({
  uri: 'http://localhost:3005/graphql',
})
const client = new ApolloClient({
  cache,
  link,
});


ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);
