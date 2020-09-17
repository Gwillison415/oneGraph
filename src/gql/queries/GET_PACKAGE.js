import ApolloClient, { gql } from "apollo-boost";

export const GET_PACKAGE = gql`
  query getPackage($name: String!) {
    npm {
      package(name: $name) {
        name
        homepage
        description
      }
    }
  }
`;
export default GET_PACKAGE;
