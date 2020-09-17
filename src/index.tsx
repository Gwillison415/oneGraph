import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import ApolloClient from "apollo-client";
import gql from "graphql-tag";

import { ApolloProvider } from "react-apollo";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";

const APP_ID = process.env.REACT_APP_OG_APP_ID;

const client = new ApolloClient({
  // By default, this client will send queries to the
  //  `/graphql` endpoint on the same host
  // Pass the configuration option { uri: YOUR_GRAPHQL_API_URL } to the `HttpLink` to connect
  // to a different host
  link: new HttpLink({
    // Define your backend (our github api) with the corresponding key
    uri: "https://serve.onegraph.com/dynamic?app_id=" + APP_ID,
    // headers: {
    //   authorization: `Bearer ${config.githubToken}`,
    // },
  }),
  cache: new InMemoryCache(),
});

const GET_PACKAGE = gql`
  query {
    npm {
      package(name: "graphql") {
        name
        homepage
        description
      }
    }
  }
`;

ReactDOM.render(
    // <React.StrictMode>
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
    // </React.StrictMode>,
  document.getElementById("root")
);
// ReactDOM.render(

//   document.getElementById('root')
// );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
