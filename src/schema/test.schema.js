const testTypeDef = `
  extend type Query {
    tests(testId: ID): [Test!]!
  }

  extend type Mutation {
    createTest(input: TestInput): Test!
    updateTest(input: TestInput): Test!
  }

  # Test Input
  input TestInput {
    title: String!
    description: String
    questions: [QuestionInput]
  }

  input QuestionInput {
    question: String
    options: [OptionInput]
  }

  input OptionInput {
    option: String
    isCorrect: Boolean
  }

  type Test {
    title: String!
    description: String
    questions: [Question]
    author: User!
    createdAt: String
    updatedAt: String
  }

  type Question {
    question: String
    options: [Option]
  }

  type Option {
    options: String
    isCorrect: Boolean
  }
`;

export default testTypeDef