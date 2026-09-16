import { Navigate } from "react-router-dom";
import { useUser } from "../context/UserContext";
import { ROUTES } from "../router/routes";
import { ProtectedWrapperProps } from "../../types/types";

const ProtectedWrapper: React.FC<ProtectedWrapperProps> = ({ children }) => {
  const { user, loading } = useUser();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <Navigate to={ROUTES.LOGIN} replace />;
  }

  return children;
};

export default ProtectedWrapper;
