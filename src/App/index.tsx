import React, { useState } from 'react';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import axios, { AxiosResponse } from 'axios';
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

interface Commits {
  days: Array<number>;
  week: number;
  total: number;
}

export interface Selection extends Pick<Repository, 'nameWithOwner'> {
  id: number;
  color: string;
  commits?: Array<Commits>;
}

const App = (): JSX.Element => {
  const [selection, setSelection] = useState<Array<Selection>>([]);

  // : Promise<AxiosResponse<Array<Commits>>>
  const fetchRepoCommits = async (repositoryName: string) => {
    const [owner, name] = repositoryName.split('/');
    // eslint-disable-next-line max-len
    const gitHubUrl = `https://api.github.com/repos/${owner}/${name}/stats/commit_activity`;
    const response = await axios.get(gitHubUrl);

    return response.data;
  };

  const repoExists = (newRepo: Selection) => {
    return selection.some((el) => {
      return el.nameWithOwner === newRepo.nameWithOwner;
    });
  };

  const addRepository = async (newRepo: Selection): Promise<void> => {
    if (!repoExists(newRepo)) {
      const commitData = await fetchRepoCommits(newRepo.nameWithOwner);
      setSelection((oldRepoList) => [
        ...oldRepoList,
        { ...newRepo, commits: commitData },
      ]);
    }
  };

  const removeRepository = (repo: Selection): void => {
    const newSelection = selection.filter((item) => item !== repo);
    setSelection(newSelection);
  };

  return (
    <ApolloProvider client={client}>
      <AppLayout>
        <GridLayout selection={selection} />
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
