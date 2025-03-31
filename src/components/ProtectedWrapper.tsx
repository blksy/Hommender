import { Navigate } from "react-router-dom";
import { useUser } from "../context/UserContext";
import { ROUTES } from "../router/routes";
import { ProtectedWrapperProps } from "../../types/types";

const ProtectedWrapper: React.FC<ProtectedWrapperProps> = ({ children }) => {
  const { user } = useUser();

  if (!user) {
    return <Navigate to={ROUTES.START} />;
  }

  return children;
};

export default ProtectedWrapper;
