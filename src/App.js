import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header, Footer, Home, Tutor, Student, RequestForm } from "./components";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Header />
      <Router>
        <Routes>
          {" "}
          <Route path="/" element={<Home />} />
          <Route path="/tutor" element={<Tutor />} />
          <Route path="/student" element={<Student />} />
        </Routes>
      </Router>

      <Footer />
    </ApolloProvider>
  );
}

export default App;
