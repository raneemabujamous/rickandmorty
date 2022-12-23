import React from "react";
import ReactDOM from "react-dom";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import App from "./App";
import reducers from "./store/reducer";
import { createStore } from "redux";
import { Provider } from "react-redux";
const store = createStore(reducers);
window.store = store;
store.subscribe(() => {
  console.log(store.getState(), "store.getState()");
});

const client = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql",
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <Provider store={store}>
    <ApolloProvider client={client} store={store}>
      <App />
    </ApolloProvider>
  </Provider>,
  document.getElementById("root")
);
