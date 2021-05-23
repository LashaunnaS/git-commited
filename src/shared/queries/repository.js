import { gql } from '@apollo/client';

const QUERY_REPOSITORY_NAME = gql`
  query QUERY_REPOSITORY_NAME($searchQ: String!) {
    search(query: $searchQ, type: REPOSITORY, first: 6) {
      edges {
        node {
          ... on Repository {
            nameWithOwner
          }
        }
      }
    }
  }
`;

export default QUERY_REPOSITORY_NAME;
