import React from "react";
import { useAuth } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router";
import Loader from "../components/Loader/Loader";

const PrivateRoute = ({ children }) => {
  const { currentUser, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return <Loader />;
  }
  if (currentUser) return children;

  return <Navigate state={location?.pathname} to="/login"></Navigate>;
};

export default PrivateRoute;
