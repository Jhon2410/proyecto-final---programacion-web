import { Link } from "react-router-dom";
import { getAllUsers_services } from "../../servicios";
import GoogleButton from "../componentes/GoogleButton";
import "./../../App.css";
import { useState } from "react";

export default function Login() {
const [username, setUsername] = useState();
const [password, setPassword] = useState();


    const iniciar = async(e)=>{
        e.preventDefault();
        const data ={
          "usuario_username" : username,
          "usuario_contraseña" : password,
        }
        const res = await getAllUsers_services(data)
        console.log(res)
        // localStorage.setItem("session",true)
        // window.location.reload();
    }

    const onChangeUsername = (e) => {
      setUsername(e.target.value)
    }

    const onChangePassword = (e) => {
      setPassword(e.target.value)
    }
  return (
    <>
      <div className="form">
        <div className="form-toggle"></div>
        <div className="form-panel one">
          <div className="form-header">
            <h1>Account Login</h1>
          </div>
          <div className="form-content">
            <form onSubmit={iniciar} method="POST">
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  onChange={onChangeUsername}
                  required="required"
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  onChange={onChangePassword}
                  required="required"
                />
              </div>
              <div className="form-group">
                <label className="form-remember">
                  <input type="checkbox" />
                  Remember Me
                </label>
                <Link className="form-recovery text-center pe-auto" to="/register">No tengo una cuenta</Link>

                <a className="form-recovery" href=".">
                  Forgot Password?
                </a>
              </div>
              <div className="form-group">
              <button type="submit">Log In</button>
               
              </div>

            </form>

          </div>
        </div>
    
      </div>
      <div className="pen-footer">
   <GoogleButton/>
      
      </div>
    </>
  );
}
