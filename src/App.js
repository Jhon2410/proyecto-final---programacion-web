import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Profile from "./pages/profile/perfil";
import Header from "./componentes/Header";
import Main from "./pages/main";
import { Redirect } from "react-router-dom";
import { useEffect, useState } from "react";
import { Provider } from "react-redux";
import Store from "./store/Store";
import Home from "./pages/Home/Home";
import Chat from "./pages/chat/Chat";
function App({ estado }) {
  const [redirect, setredirect] = useState(estado ? estado : false);
  const [redirect2, setredirect2] = useState(estado ? estado : false);

  useEffect(() => {
    if (
      window.location.pathname.toLocaleLowerCase() === "/login" ||
      window.location.pathname.toLocaleLowerCase() === "/register"
    ) {
      if (localStorage.getItem("session") === "true") {
        setredirect2(true);
      }
    } else {
      if (localStorage.getItem("session") === null) {
        setredirect(true);
      }
    }
  }, []);

  return (
    <Provider store={Store}>
      <Router>
        {redirect ? <Redirect push to="/login" /> : null}
        {redirect2 ? <Redirect push to="/home" /> : null}
        <Switch>
          <Route path="/login">
            <div className="">
              <Login />
            </div>
          </Route>

          <Route path="/register">
            <Register />
            <Link to="/" className="d-none">
              pagina princpial
            </Link>
          </Route>

          <Route path="/">
            <Route path="/">
              <Header />
              <Main pg="" />
              <Redirect to="/home"></Redirect>
            </Route>
            <Route path="/home">
              <Main pg="home" />
              <h2 className="container bg-dark text-center text-white fs-3 p-3">
                pagina principal
              </h2>
            </Route>
            <Route path="/user">
              <Main pg="user" />
              <Profile />
            </Route>
            <Route path="/f">FFFF</Route>
            <Route path="/menu">
              <Main pg="menu" />
              <Home></Home>

              <h2 className="container bg-dark text-center text-white fs-3 p-3">
                Menu
              </h2>
            </Route>

            <Route path="/chat">
              <Main pg="chat" />
              <Chat></Chat>
            </Route>
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
