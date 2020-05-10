import { gql } from "apollo-server";
const userTypeDef = gql`
  extend type Query {
    users(userId: ID): [User!]!
    me: User!
  }

  extend type Mutation {
    signUp(input: UserInput!): SignUpSignInResponse!
    signIn(email: String!, password: String!): SignUpSignInResponse!
  }

  # Input types
  input UserInput {
    name: String!
    email: String!
    password: String!
  }

  #Custom types
  type User {
    _id: ID!
    name: String!
    email: String!
    avatarUrl: String
    userType: UserType
  }

  type SignUpSignInResponse {
    user: User!
    token: String!
  }

  # Enums
  enum UserType {
    admin
    standard
  }
`;

export default userTypeDef;
