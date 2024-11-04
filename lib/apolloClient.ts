import { HttpLink, InMemoryCache, ApolloClient } from "@apollo/client";

const client = new ApolloClient({
  link: new HttpLink({
    uri: "https://rickandmortyapi.com/graphql",
  }),
  cache: new InMemoryCache(),
});

export default client;
