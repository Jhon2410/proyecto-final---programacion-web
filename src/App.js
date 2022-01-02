import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Profile from "./pages/profile/perfil";
import Header from "./componentes/Header";
import Main from "./pages/main";
function App() {
  return (
    <>

      <Router>
        <Switch>
          <Route path="/login">
            <div className="">
              <Login />
            </div>
          </Route>

          <Route path="/register">
            <div className="d-flex  justify-content-center align-items-center   contenedorLogin">
              <Register />
              <Link to="/" className="d-none">
                pagina princpial
              </Link>
            </div>
          </Route>

          <Route path="/">
             <Route path="/">
             <Header />
             <Main pg="" />
            
             </Route>
            <Route path="/home">
              <Main pg="home" />
              <h2 className="container bg-dark text-center text-white fs-3 p-3">pagina principal</h2>
            </Route>
            <Route path="/user">
              <Main pg="user" />
              <Profile />
            </Route>
            <Route path="/f">FFFF</Route>
            <Route path="/menu">
              <Main pg="menu" />
              <h2 className= "container bg-dark text-center text-white fs-3 p-3">Menu</h2>
            </Route>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
