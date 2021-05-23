import { gql } from '@apollo/client';

export const QUERY_REPOSITORY_COMMITS_PAGINATION = gql`
  query {
    repository(owner: "facebook", name: "react") {
      defaultBranchRef {
        target {
          ... on Commit {
            # $afterDate -> $untilDate
            # last cursor -> next month
            history(
              after: "1a2d7925035531e5767ff31ff8d0d581b5f94d49 1"
              until: "2020-04-01T00:00:00"
            ) {
              edges {
                node {
                  committedDate
                }
              }
              pageInfo {
                startCursor
                hasNextPage
              }
            }
          }
        }
      }
    }
  }
`;

export default QUERY_REPOSITORY_COMMITS_PAGINATION;
