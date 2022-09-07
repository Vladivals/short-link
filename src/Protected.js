import { Navigate, useLocation } from "react-router-dom";

const Protected = ({ children }) => {
    
  let tokenExist = localStorage.getItem("token");
  let location = useLocation();

  return !tokenExist ? (
    <Navigate to="/login" state={{ from: location }} />
  ) : (
    children
  );
};

export default Protected;
