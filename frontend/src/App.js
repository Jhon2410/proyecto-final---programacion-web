import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";

function App() {

  return (
    <>
      <Router>
        <Switch>
          <Route path="/login">
           
            <div className="d-flex flex-column justify-content-center align-items-center shadow vh-100 contenedorLogin"  >
            <Login /> 
            <Link to="/" className="d-none" >
              pagina princpial
            </Link>           
            </div>
          </Route>
          
     

          <Route path="/register">
           
           <div className="d-flex flex-column justify-content-center align-items-center shadow vh-100 contenedorLogin"  >
           <Register /> 
           <Link to="/" className="d-none" >
             pagina princpial
           </Link>           
           </div>
         </Route>

         <Route path="/menu">

        <h2 className="bg-dark text-center text-white fs-3 p-3">Menu</h2>
            
          </Route>
          <Route path="/">
            <Link to="/login">ir a el login</Link>
          </Route>
        </Switch>
      </Router>

    
    </>
  );
}

export default App;
