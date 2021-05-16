import React from 'react';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import GlobalStyle from '../shared/styles/GlobalStyles.js';
import AppLayout from '../shared/styledComponents/AppLayoutStyles.js';
import GridLayout from '../shared/styledComponents/GridLayout.js';
import ListLayout from '../shared/styledComponents/ListLayout.js';

const GITHUB_BASE_URL = 'https://api.github.com/graphql';

const client = new ApolloClient({
  uri: GITHUB_BASE_URL,
  headers: {
    authorization: `Bearer ${process.env.REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN}`,
  },
  cache: new InMemoryCache(),
});

const App = (): JSX.Element => {
  return (
    <ApolloProvider client={client}>
      <AppLayout>
        <GridLayout>Grid Layout</GridLayout>
        <ListLayout>List Layout</ListLayout>
      </AppLayout>
      <GlobalStyle />
    </ApolloProvider>
  );
};

export default App;
