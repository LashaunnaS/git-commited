import { useQuery } from '@apollo/client';
import React, { useState } from 'react';
import { Search } from 'react-feather';
import debounce from 'lodash.debounce';
import QUERY_REPOSITORY_NAME from '../../../shared/queries/repository';
import AutoCompleteForm from '../AutoCompleteForm';
import EmptyListBannerStyles from './EmptyListBannerStyles';
import ListLayoutStyles from './ListLayoutStyles';
import ListItemStyles from './ListItem';

interface ListLayoutProps {
  addRepository: (newRepo: string) => void;
  removeRepository: (repo: string) => void;
  repoSelection: Array<string>;
}

const ListLayout = ({
  addRepository,
  repoSelection,
  removeRepository,
}: ListLayoutProps): JSX.Element => {
  const [searchQuery, setSearchQuery] = useState<string>('');

  const { loading, error, data } = useQuery(QUERY_REPOSITORY_NAME, {
    variables: { searchQ: `is:public ${searchQuery} in:titles` },
  });

  if (error) {
    return (
      <ListLayoutStyles>
        <p>{error}...</p>
      </ListLayoutStyles>
    );
  }

  const setSearchTermDebounced = debounce(setSearchQuery, 500);

  const selectedRepo: Array<string> = [];

  data?.search.edges.forEach((repo: any) => selectedRepo.push(repo.node.nameWithOwner));

  return (
    <ListLayoutStyles>
      <AutoCompleteForm
        repositories={selectedRepo}
        addRepository={addRepository}
        setSearchQuery={setSearchTermDebounced}
        loading={loading}
      />
      {repoSelection.length === 0 ? (
        <EmptyListBannerStyles>
          <Search color="#bcbcf2" size={50} />
          <p> Search for a GitHub repository to populate graph</p>
        </EmptyListBannerStyles>
      ) : (
        repoSelection.map((repo) => {
          return <ListItemStyles repository={repo} removeRepository={removeRepository} />;
        })
      )}
    </ListLayoutStyles>
  );
};

export default ListLayout;
