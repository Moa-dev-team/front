import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function PrivateRoute({ children }) {
  const user = useSelector((state) => state.user.isLoggedIn);

  if (!user) {
    return <Navigate to="/login" replace />;
  }
  return children;
}
