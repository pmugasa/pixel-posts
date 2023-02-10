import { useEffect, useState } from "react";
import Login from "./pages/Auth/Login";
import loginService from "./services/login";
import signUpService from "./services/signup";
import Dashboard from "./pages/Dashboard";

const App = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);

  const handleLogin = async (e) => {
    //preventing browser from reloading
    e.preventDefault();
    console.log("Before login state", user);
    try {
      const user = await loginService.login({ email, password });
      //saving token
      window.localStorage.setItem("loggedPixelPostUser", JSON.stringify(user));
      setUser(user);

      setEmail("");
      setPassword("");
    } catch (exception) {
      console.log(exception);
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();

    try {
      const user = await signUpService.signUp({ email, password });
      window.localStorage.setItem("loggedPixelPostUser", JSON.stringify(user));
      setUser(user);
      setEmail("");
      setPassword("");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem("loggedPixelPostUser");
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      setUser(user);
    }
  }, []);

  const handleLogout = () => {
    setUser(null);
    window.localStorage.removeItem("loggedPixelPostUser");
    console.log("logged out");
  };

  if (user === null) {
    return (
      <>
        <Login
          handleLogin={handleLogin}
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
        />
      </>
    );
  } else if (user !== null) {
    return (
      <>
        <Dashboard handleLogout={handleLogout} />
      </>
    );
  }
};
export default App;
