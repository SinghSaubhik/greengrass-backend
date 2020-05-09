import jwt from "jsonwebtoken";

export const getToken = (args) => {
  return jwt.sign(args, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });
};

export const getUserInfoFromHeaders = (headers) => {
  if (headers && headers.authorization) {
    const token = headers.authorization.split(" ")[1];
    const userInfo = jwt.decode(token);

    return userInfo;
  } else {
    throw new Error("UnAuthorized");
  }
};
