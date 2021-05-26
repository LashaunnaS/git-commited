import React from 'react';
import { useQuery } from '@apollo/client';
import { Star, Trash2 } from 'react-feather';
import formatDistance from 'date-fns/formatDistance';
import format from 'date-fns/format/index';
import { Selection } from '../../..';
import QUERY_REPOSITORY_STATS from '../../../../shared/queries/repositoryStats';
import RepositoryNameStyles from '../../../../shared/styledComponents/RepositoryNameStyles';
import ListItemColorStripStyles from './ListItemColorStripStyles/ListItemColorStripStyles';
import ListItemStyles from './ListItemStyles';
import ListItemNameStyles from './ListItemNameStyles/ListItemNameStyles';
import ListItemStarsStyles from './ListItemStarsStyles/ListItemStarsStyles';
import ListItemStatsStyles from './ListItemStatsStyles/ListItemStatsStyles';
import ListItemUpdateTextStyles from './ListItemUpdateTextStyles/ListItemUpdateTextStyles';
import ListItemDeleteButtonStyles from './ListItemDeleteButtonStyles/ListItemDeleteButtonStyles';

interface ListItemProps {
  repository: Selection;
  removeRepository: (repo: Selection) => void;
}

const ListItem = ({ repository, removeRepository }: ListItemProps): JSX.Element => {
  const [repoOwner, repoName] = repository.nameWithOwner.split('/');

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

  const lastUpdated = () => {
    const currDate = new Date();
    const lastUpdatedDate = data.repository.updatedAt;
    const lastUpdatedInYear = format(new Date(lastUpdatedDate), 'YYY');

    if (currDate.getFullYear() - Number(lastUpdatedInYear) < 1) {
      return `Updated ${formatDistance(new Date(), new Date(data.repository.updatedAt), {
        includeSeconds: true,
      })} ago`;
    }
    return `Updated on ${format(new Date(lastUpdatedDate), 'MMM dd, YYY')}`;
  };

  const formatRepositoryName = () => {
    const repo = repository.nameWithOwner.split('/');

    return (
      <ListItemNameStyles>
        <RepositoryNameStyles primary>{repo[0]} / </RepositoryNameStyles>
        <RepositoryNameStyles>{repo[1]}</RepositoryNameStyles>
      </ListItemNameStyles>
    );
  };

  return (
    <ListItemStyles>
      <ListItemColorStripStyles color={repository.color} />
      <ListItemStatsStyles>
        {formatRepositoryName()}
        <div>
          <Star color="var(--color-white-regular)" size={13} />
          <ListItemStarsStyles>{stars()}</ListItemStarsStyles>
          <ListItemUpdateTextStyles>{data && lastUpdated()}</ListItemUpdateTextStyles>
        </div>
      </ListItemStatsStyles>
      <ListItemDeleteButtonStyles
        type="button"
        onClick={() => removeRepository(repository)}
      >
        <Trash2 color="var(--color-white-regular)" />
      </ListItemDeleteButtonStyles>
    </ListItemStyles>
  );
};

export default ListItem;
