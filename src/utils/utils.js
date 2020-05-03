import jwt from "jsonwebtoken";

export const getToken = (args) => {
  return jwt.sign(args, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });
};
