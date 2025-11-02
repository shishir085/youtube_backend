import jwt from "jsonwebtoken";
import { ApiError } from "../utils/ApiError.js";
import { User } from "../models/user.model.js";

const verifyJWT = async (req, res, next) => {
  try {
    const token = req.cookies?.accessToken || (req.headers?.authorization?.startsWith("Bearer ") ? req.headers.authorization.split(" ")[1] : null);

    if (!token) {
      return next(new ApiError(401, "Unauthorized request"));
    }

    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

    const user = await User.findById(decoded._id).select("-password -refreshToken");

    if (!user) {
      return next(new ApiError(401, "Invalid token"));
    }

    req.user = user;
    return next();
  } catch (error) {
    if (error?.name === "TokenExpiredError" || error?.name === "JsonWebTokenError") {
      return next(new ApiError(401, error.message));
    }
    return next(new ApiError(401, error?.message || "Unauthorized request"));
  }
};

export { verifyJWT };
