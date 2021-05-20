import React, { useState } from 'react';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import AppLayout from '../shared/styledComponents/AppLayoutStyles';
import GridLayout from './components/GridLayout/index';
import ListLayout from './components/ListLayout/index';
import GlobalStyle from '../shared/styles/GlobalStyles';

const GITHUB_BASE_URL = 'https://api.github.com/graphql';

const client = new ApolloClient({
  uri: GITHUB_BASE_URL,
  headers: {
    authorization: `Bearer ${process.env.REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN}`,
  },
  cache: new InMemoryCache(),
});

const App = (): JSX.Element => {
  const [selection, setSelection] = useState<Array<number>>([]);

  const updateRepoSelection = (newRepo: number) =>
    setSelection((oldRepoList) => [...oldRepoList, newRepo]);

  return (
    <ApolloProvider client={client}>
      <AppLayout>
        <GridLayout />
        <ListLayout updateRepoSelection={updateRepoSelection} />
      </AppLayout>
      <GlobalStyle />
    </ApolloProvider>
  );
};

export default App;
