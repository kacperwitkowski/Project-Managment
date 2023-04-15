import { gql } from "@apollo/client";

const CREATE_PROJECT = gql`
  mutation createProject(
    $name: String!
    $description: String!
    $status: ProjectStatus!
    $clientId: ID!
  ) {
    addProject(
      name: $name
      description: $description
      status: $status
      clientId: $clientId
    ) {
      name
      status
      description
      client {
        id
        name
        email
        phone
      }
    }
  }
`;

const UDPATE_PROJECT = gql`
  mutation updateProject(
    $name: String!
    $description: String!
    $status: ProjectStatusUpdate!
    $id: ID!
  ) {
    updateProject(
      name: $name
      description: $description
      status: $status
      id: $id
    ) {
      name
      status
      description
      client {
        id
        name
        email
        phone
      }
    }
  }
`;

export { CREATE_PROJECT, UDPATE_PROJECT };
