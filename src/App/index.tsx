import React, { useState } from 'react';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import { Repository } from '../generated/graphql';
import GlobalStyle from '../shared/styles/GlobalStyles';
import AppLayout from './AppLayoutStyles';
import GridLayout from './components/GridLayout/index';
import ListLayout from './components/ListLayout/index';

const GITHUB_BASE_URL = 'https://api.github.com/graphql';

const client = new ApolloClient({
  uri: GITHUB_BASE_URL,
  headers: {
    authorization: `Bearer ${process.env.REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN}`,
  },
  cache: new InMemoryCache(),
});

export interface Selection extends Pick<Repository, 'nameWithOwner'> {
  id: number;
  color: string;
}

const App = (): JSX.Element => {
  const [selection, setSelection] = useState<Array<Selection>>([]);

  const addRepository = (newRepo: Selection): void =>
    setSelection((oldRepoList) => [...oldRepoList, newRepo]);

  const removeRepository = (repo: Selection): void => {
    const newSelection = selection.filter((item) => item !== repo);
    setSelection(newSelection);
  };

  return (
    <ApolloProvider client={client}>
      <AppLayout>
        <GridLayout />
        <ListLayout
          addRepository={addRepository}
          selection={selection}
          removeRepository={removeRepository}
        />
      </AppLayout>
      <GlobalStyle />
    </ApolloProvider>
  );
};

export default App;
