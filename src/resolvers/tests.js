import Test from "../models/tests";
import User from "../models/user";
import { getUserInfoFromHeaders } from "../utils/utils";

export const tests = (parent, args, context, info) => {
  return Test.find();
};

export const createTest = async (parent, args, context, info) => {
  const userInfo = getUserInfoFromHeaders(context.headers);
  const test = { ...args.input, author: userInfo.id };
  return Test.create(test);
};

export const testUserMap = (parent, args, context, info) => {
  return User.findById(parent.author);
};
