import { gql } from '@apollo/client';

const QUERY_REPOSITORY_COMMITS = gql`
  query QUERY_REPOSITORY_COMMITS {
    # $repoOwner $repoName
    repository(owner: "facebook", name: "react") {
      defaultBranchRef {
        target {
          ... on Commit {
            # $sinceDate -> $untilDate
            # jan, 01 2020 -> feb, 01, 2020,
            history(
              since: "2020-01-01T00:00:00"
              after: ""
              until: "2020-02-01T00:00:00"
            ) {
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
