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
import AsidePeople from "./pages/componentes/AsidePeople";
import Videos from "./pages/videos/Videos"
import Wallet from "./pages/wallet/Wallet";
import Tienda from "./pages/tienda/Tienda";
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
             <Route path="/videos">
                  <Main pg="movie-play" />
                  <div className="mycontenedor">
                    <Videos />
                  </div>
            </Route>

                <Route path="/store">
                  <Main pg="store-alt" />
                  <div className="mycontenedor">
                    <Tienda></Tienda>
                  </div>
            </Route>


                <Route path="/money">
                  <Main pg="money" />
                  <div className="mycontenedor">
                  <Wallet></Wallet>
                  </div>
            </Route>
           
            <Route path="/home">
              <Main pg="home" />
              <div className="container  w-50 mycontenedor  d-flex flex-row  justify-content-between">
                <div className="position-fixed h-100  overflow-auto  start-0 mx-5 container w-25">
                  <div className="card mx-3">
                    <img
                      src="https://www.picuino.com/_images/codeorg-logo.png"
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <a href="#" className="btn btn-primary">
                        Go somewhere
                      </a>
                    </div>
                  </div>
                </div>
                <div className="mx-5 position-relative start-0">
                  <Home></Home>
                  <Home></Home>
                  <Home></Home>
                  <Home></Home>
                  <Home></Home>
                  <Home></Home>
                </div>
                <div className="position-fixed h-100  overflow-auto  end-0 mx-2 mr-5 w-25">
                  {" "}
                  <AsidePeople />
                </div>
              </div>
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
