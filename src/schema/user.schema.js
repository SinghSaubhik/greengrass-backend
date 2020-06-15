const userTypeDef = `
  extend type Query {
    users(searchText: String, offset: Int, limit: Int): [User!]!
    user(id: ID!): User!
    me: User!
  }

  extend type Mutation {
    signUp(input: UserInput!): AuthData!
    signIn(email: String!, password: String!): AuthData!
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

  type AuthData {
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
