import { users, signUp, signIn, me } from "./user";
import { createTest, tests, testUserMap } from "./tests";

const resolvers = {
  Query: {
    users,
    me,
    tests,
  },
  Mutation: {
    signUp,
    signIn,
    createTest,
  },

  Test: {
    author: testUserMap,
  },
};

export { resolvers as default };
