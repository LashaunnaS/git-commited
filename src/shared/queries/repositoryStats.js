import { gql } from '@apollo/client';

const QUERY_REPOSITORY_STATS = gql`
  query QUERY_REPOSITORY_STATS($repoOwner: String!, $repoName: String!) {
    repository(owner: $repoOwner, name: $repoName) {
      stargazerCount
      updatedAt
    }
  }
`;

export default QUERY_REPOSITORY_STATS;
