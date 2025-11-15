import { catchAsyncErrors } from "./catchAsyncErrors.js";
import ErrorHandler from "./errorMiddleware.js";
import jwt from "jsonwebtoken";
import { User } from "../models/userSchema.js";

export const isAdminAuthenticated = catchAsyncErrors(async (req, res, next) => {
  const token = req.cookies.adminToken;
  if (!token) {
    return next(new ErrorHandler("Admin Not Authenticated", 400));
  }

  const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
  req.user = await User.findById(decoded.id);
  if (req.user.role !== "Admin") {
    return next(
      new ErrorHandler(`${req.user.role} not authorized for this resource`, 403)
    );
  }
  next();
});

export const isAuthenticatedUser = catchAsyncErrors(async (req, res, next) => {
  const { token } = req.cookies; // or req.headers.authorization
  if (!token) {
    return next(new ErrorHandler("Login first to access this resource", 401));
  }
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  req.User = await User.findById(decoded.id);
  next();
});

export const isLitigantAuthenticated = catchAsyncErrors(async (req, res, next) => {
  try {
    const token = req.cookies.litigantToken;
    if (!token) return next(new ErrorHandler("Litigant Not Authenticated", 401));

    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

    const user = await User.findById(decoded.id);
    if (!user) return next(new ErrorHandler("User not found", 404));

    if (user.role !== "Litigant")
      return next(new ErrorHandler(`${user.role} not authorized`, 403));

    req.User = user; 
    next();
  } catch (error) {
    console.error("Auth error:", error);
    return next(new ErrorHandler("Authentication failed", 500));
  }
});

