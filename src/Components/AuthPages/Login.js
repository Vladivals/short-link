import { useRef, useState, useEffect, useContext } from "react";
import axios from "../../api/axios";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
const LOGIN_URL = "/login";

const Login = () => {
  let { setAuth } = useAuth();
  const userRef = useRef();
  const errRef = useRef();
  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let bodyFormData = new FormData();
      bodyFormData.append("username", user);
      bodyFormData.append("password", pwd);

      let accessToken = "";
      let tokenType = "";

      axios({
        method: "post",
        url: LOGIN_URL,
        data: bodyFormData,
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      }).then(function (response) {
        accessToken = response?.data?.access_token;
        tokenType = response?.data?.token_type;
        localStorage.setItem("token", response?.data?.token_type);

        setAuth({ user, pwd, accessToken, isAuth: true });
        setUser("");
        setPwd("");
        setSuccess(true);
        navigate("/createShortLinkPage");
      });
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 422) {
        setErrMsg("Validation error");
      }
      errRef.current.focus();
    }
  };

  return (
    <>
      {success ? (
        <section>
          <h1>You are logged in!</h1>
          <br />
        </section>
      ) : (
        <section>
          <p
            ref={errRef}
            className={errMsg ? "errmsg" : "offscreen"}
            aria-live="assertive"
          >
            {errMsg}
          </p>
          <h1>Log In</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="usernameLogin">Username:</label>
            <input
              type="text"
              id="usernameLogin"
              ref={userRef}
              autoComplete="new-password"
              onChange={(e) => setUser(e.target.value)}
              value={user}
              required
            />

            <label htmlFor="passwordLogin">Password:</label>
            <input
              type="password"
              id="passwordLogin"
              autoComplete="new-password"
              onChange={(e) => setPwd(e.target.value)}
              value={pwd}
              required
            />
            <button>Log In</button>
          </form>
          <p>
            Need an Account?
            <br />
            <span className="line">
              <Link to="/register">Sign In</Link>
            </span>
          </p>
        </section>
      )}
    </>
  );
};

export default Login;
