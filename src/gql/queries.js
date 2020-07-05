import gql from 'graphql-tag';

export const GET_ALL_TODOS = gql`
  query GetAllTodos {
    getAllTodos {
      id
      title
      completed
    }
  }
`;

export const GET_TODO = gql`
    query getTodo ($id: ID!) {
      getTodo (id: $id) {
        id
        title
        completed
      }
    }
`;