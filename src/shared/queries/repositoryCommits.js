import { gql } from '@apollo/client';

const QUERY_REPOSITORY_COMMITS = gql`
  query {
    rateLimit {
      cost
      remaining
      resetAt
    }
    repository(owner: "facebook", name: "react") {
      stargazerCount
      updatedAt
      defaultBranchRef {
        target {
          ... on Commit {
            history(since: "2020-01-01T00:00:00", until: "2020-02-01T00:00:00") {
              edges {
                node {
                  committedDate
                }
              }
              pageInfo {
                startCursor
              }
            }
          }
        }
      }
    }
  }
`;

export default QUERY_REPOSITORY_COMMITS;
