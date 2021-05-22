import { useQuery } from '@apollo/client';
import React from 'react';
import { Star, Trash2 } from 'react-feather';
import QUERY_REPOSITORY_STATS from '../../../../shared/queries/repositoryStats';
import RepositoryNameStyles from '../../../../shared/styledComponents/RepositoryNameStyles';
import ListItemColorStripStyles from './ListItemColorStripStyles/ListItemColorStripStyles';
import ListItemStyles from './ListItemStyles';
import ListItemNameStyles from './ListItemNameStyles/ListItemNameStyles';
import ListItemStarsStyles from './ListItemStarsStyles/ListItemStarsStyles';
import ListItemStatsStyles from './ListItemStatsStyles/ListItemStatsStyles';
import ListItemDeleteButtonStyles from './ListItemDeleteButtonStyles/ListItemDeleteButtonStyles';

interface ListItemProps {
  repository: string;
  removeRepository: (repo: string) => void;
}

const ListItem = ({ repository, removeRepository }: ListItemProps): JSX.Element => {
  const [repoOwner, repoName] = repository.split('/');

  const { data } = useQuery(QUERY_REPOSITORY_STATS, {
    variables: { repoOwner, repoName },
  });

  const stars = () => {
    let num = data?.repository.stargazerCount;

    if (data?.repository.stargazerCount > 1000) {
      num = `${Math.round(num / 1000)}k`;
    }

    return num;
  };

  const formatRepositoryName = () => {
    const repo = repository.split('/');

    return (
      <ListItemNameStyles>
        <RepositoryNameStyles primary>{repo[0]} / </RepositoryNameStyles>
        <RepositoryNameStyles>{repo[1]}</RepositoryNameStyles>
      </ListItemNameStyles>
    );
  };

  return (
    <ListItemStyles>
      <ListItemColorStripStyles />
      <ListItemStatsStyles>
        {formatRepositoryName()}
        <div>
          <Star color="#fff" size="13" />
          <ListItemStarsStyles>{stars()}</ListItemStarsStyles>
          <span style={{ color: '#bfbdd9', fontSize: '1.3rem' }}>
            {data?.repository.updatedAt}
          </span>
        </div>
      </ListItemStatsStyles>
      <ListItemDeleteButtonStyles
        type="button"
        onClick={() => removeRepository(repository)}
      >
        <Trash2 color="#fff" />
      </ListItemDeleteButtonStyles>
    </ListItemStyles>
  );
};

export default ListItem;
