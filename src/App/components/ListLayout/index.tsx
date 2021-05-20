import { useQuery } from '@apollo/client';
import React from 'react';
import { Search } from 'react-feather';
import QUERY_REPOSITORY_NAME from '../../../shared/queries/repository';
import AutoCompleteForm from '../AutoCompleteForm';
import EmptyListBannerStyles from './EmptyListBannerStyles';

import ListLayoutStyles from './ListLayoutStyles';

interface ListLayoutProps {
  updateRepoSelection: React.Dispatch<React.SetStateAction<number | void>> | void;
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const ListLayout = ({ updateRepoSelection }: any): JSX.Element => {
  const { loading, error, data } = useQuery(QUERY_REPOSITORY_NAME);

  if (loading) {
    return (
      <ListLayoutStyles>
        <p>loading...</p>
      </ListLayoutStyles>
    );
  }
  if (error) {
    return (
      <ListLayoutStyles>
        <p>{error}...</p>
      </ListLayoutStyles>
    );
  }

  const selectedRepo: Array<string> = [];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data.search.edges.forEach((repo: any) => selectedRepo.push(repo.node.nameWithOwner));

  return (
    <ListLayoutStyles>
      <AutoCompleteForm
        repositories={selectedRepo}
        updateRepoSelection={updateRepoSelection}
      />
      <EmptyListBannerStyles>
        <Search color="#bcbcf2" height={50} width={50} />
        <p> Search for a GitHub repository to populate graph</p>
      </EmptyListBannerStyles>
    </ListLayoutStyles>
  );
};

export default ListLayout;
