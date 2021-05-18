import { gql } from '@apollo/client';

const QUERY_REPOSITORY_NAME = gql`
  query ($searchQ: String!) {
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
//  {
//    "searchQ": "is:public react in:title"
//  }

export default QUERY_REPOSITORY_NAME;
