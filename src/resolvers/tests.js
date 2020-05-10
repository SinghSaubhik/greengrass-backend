import Test from "../models/tests";
import User from "../models/user";
import { getUserInfoFromHeaders } from "../utils/utils";

const testUserMap = (parent, args, context, info) => {
  return User.findById(parent.author);
};

const testQuery = {
  tests: (parent, args, context, info) => {
    return Test.find();
  },
};

const testMutation = {
  createTest: async (parent, args, context, info) => {
    const userInfo = getUserInfoFromHeaders(context.headers);
    const test = { ...args.input, author: userInfo.id };
    return Test.create(test);
  },
};

const testMappings = {
  Test: {
    author: testUserMap,
  },
};

export { testQuery, testMutation, testMappings };
