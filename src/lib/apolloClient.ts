import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: '/api/proxy/graphql',
  cache: new InMemoryCache(),
});

export default client;