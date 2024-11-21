import { gql } from "@apollo/client";

export const GET_ALL_CHARACTERS = gql`
  query GetAllCharacters($page: Int) {
    characters(page: $page) {
      info {
        pages
      }
      results {
        name
        id
        image
        __typename
      }
    }
  }
`;

export const GET_CHARACTER = gql`
  query GetCharacter($id: ID!) {
    character(id: $id) {
      name
      id
      gender
      species
      origin {
        name
      }
      image
      episode {
        name
        episode
      }
    }
  }
`;

export const FILTER_CHARACTERS = gql`
  query FilterCharacters($name: String) {
    characters(filter: { name: $name }) {
      results {
        name
        image
        id
      }
    }
  }
`;
