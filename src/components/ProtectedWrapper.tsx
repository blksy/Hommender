import { Navigate } from "react-router-dom";
import { useUser } from "../hooks/useUser";
import { ROUTES } from "../router/routes";
import { ProtectedWrapperProps } from "../../types/types";
import Loader from "./Loader";

const ProtectedWrapper: React.FC<ProtectedWrapperProps> = ({ children }) => {
  const { user, loading } = useUser();

  if (loading) {
    return <Loader />;
  }

  if (!user) {
    return <Navigate to={ROUTES.LOGIN} replace />;
  }

  return children;
};

export default ProtectedWrapper;
