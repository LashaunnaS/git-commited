import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { Search } from 'react-feather';
import debounce from 'lodash.debounce';
import { Selection } from '../..';
import QUERY_REPOSITORY_NAME from '../../../shared/queries/repository';
import AutoCompleteForm from '../AutoCompleteForm';
import EmptyListBannerStyles from './EmptyListBannerStyles';
import ListLayoutStyles from './ListLayoutStyles';
import ListItemStyles from './ListItem';
import { RepositoryEdge } from '../../../generated/graphql';

interface ListLayoutProps {
  addRepository: (newRepo: Selection) => void;
  removeRepository: (repo: Selection) => void;
  selection: Array<Selection>;
}

const ListLayout = ({
  addRepository,
  selection,
  removeRepository,
}: ListLayoutProps): JSX.Element => {
  const [searchQuery, setSearchQuery] = useState<string>('');

  const { loading, data } = useQuery(QUERY_REPOSITORY_NAME, {
    variables: { searchQ: `is:public ${searchQuery} in:titles` },
  });

  const setSearchTermDebounced = debounce(setSearchQuery, 550);

  const selectedRepo: Array<string> = [];

  data?.search.edges.forEach(
    (repo: RepositoryEdge) => repo.node && selectedRepo.push(repo.node.nameWithOwner),
  );

  return (
    <ListLayoutStyles>
      <AutoCompleteForm
        repositories={selectedRepo}
        addRepository={addRepository}
        setSearchQuery={setSearchTermDebounced}
        loading={loading}
      />
      {selection.length === 0 ? (
        <EmptyListBannerStyles>
          <Search color="var(--color-purple-lighter)" size={50} />
          <p> Search for a GitHub repository to populate graph</p>
        </EmptyListBannerStyles>
      ) : (
        selection.map((repo) => {
          return (
            <ListItemStyles
              key={`${repo.id}-${repo.nameWithOwner}`}
              repository={repo}
              removeRepository={removeRepository}
            />
          );
        })
      )}
    </ListLayoutStyles>
  );
};

export default ListLayout;
