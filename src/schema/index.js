import { gql } from "apollo-server";
const typeDefs = gql`
  type Query {
    # Users Quesries
    users(userId: ID): [User!]!
    me: User!

    # Test related
    tests(testId: ID): [Test!]!
  }

  type Mutation {
    #---------------- User Mutation ------------------------#
    signUp(input: UserInput!): SignUpSignInResponse!
    signIn(email: String!, password: String!): SignUpSignInResponse!
    #---------------- User Mutation ------------------------#

    createTest(input: TestInput): Test!
    updateTest(input: TestInput): Test!
  }


"""==========================  USer  ====================================================="""
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

  type SignUpSignInResponse{
    user: User!
    token: String!
  }

  # Enums
  enum UserType{
    admin
    standard
  }

"""==========================  Test  ====================================================="""
  # Test Input
  input TestInput{
    title: String!
    description: String
    questions: [QuestionInput]
  } 

  input QuestionInput{
    question: String,
    options: [OptionInput]
  }

  input OptionInput{
    option: String,
    isCorrect: Boolean
  }

  type Test{
    title: String!
    description: String
    questions: [Question]
    author: User!
    createdAt: String
    updatedAt: String
  }

  type Question{
    question: String,
    options: [Option]
  }

  type Option{
    options: String,
    isCorrect: Boolean
  }
`;

export default typeDefs;
