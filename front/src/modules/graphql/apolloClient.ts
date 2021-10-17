import { ApolloClient, from, HttpLink, InMemoryCache } from '@apollo/client';
import { onError } from "@apollo/client/link/error";

const httpLink = new HttpLink({
  uri: process.env.REACT_APP_GRAPHQL_URI ? `${process.env.REACT_APP_GRAPHQL_URI}/graphql` : 'http://localhost:3000/graphql'
});

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
      ),
    );

  if (networkError) console.log(`[Network error]: ${networkError}`);
});

export const client = new ApolloClient({
  link: from([errorLink, httpLink]),
  cache: new InMemoryCache(),
});


