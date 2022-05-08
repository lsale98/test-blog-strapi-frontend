import { gql } from '@apollo/client';

export const GET_ALL_POSTS = gql`
  query getAllBlogs {
    blogs {
      data {
        id
        attributes {
          title
          description
        }
      }
    }
  }
`;
