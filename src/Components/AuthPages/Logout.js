import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../Context/AuthProvider";

const Logout = () => {

  const { setAuth } = useContext(AuthContext);
  const navigate = useNavigate();
  
  function onClickHandler() {
    setAuth({});
    localStorage.setItem("token", "");
    navigate("/login");
  }

  return <button onClick={onClickHandler}>Log out</button>;
};

export default Logout;
