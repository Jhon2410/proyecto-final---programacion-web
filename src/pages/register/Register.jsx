import { Link } from "react-router-dom";
import { validar_servicio } from "../../servicios";
import GoogleButton from "../componentes/GoogleButton";
import "./../../App.css";
// import "./style.css";
import { useState } from "react"
export default function Register() {
    const [correo, setCorreo] = useState();
    const [password, setPassword] = useState();
    const [password2, setPassword2] = useState();


    const correoChange =(e)=>{
        setCorreo(e.target.value)
    }
    const passwordChange =(e)=>{
        setPassword(e.target.value)
    }
    const password2Change =(e)=>{
        setPassword2(e.target.value)
    }

const registrar = (e)=>{
    e.preventDefault();
    if(password === password2){
        validar_servicio();
    }else{
        alert("las contraseñas np coinciden.")
    }
}
  return (
    <>
      <div className="form">
        <div className="form-toggle"></div>
        <div className="form-panel one">
          <div className="form-header">
            <h1>Account sing up</h1>
          </div>
          <div className="form-content">
            <form
              onSubmit={registrar}
              method="POST"
            >
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  required="required"
                  onChange={correoChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  required="required"
                  onChange={passwordChange}

                />

                <label htmlFor="password2" className="mt-2 ">Repeat Password</label>
                <input
                  type="password"
                  id="password2"
                  name="password2"
                  required="required"
                  onChange={password2Change}

                />
              </div>

              <div className="form-group">
                <label className="form-remember">
                  <input type="checkbox" />
                  Remember Me
                </label>
                <Link className="form-recovery text-center pe-auto" to="login">
                  No tengo una cuenta
                </Link>

                <a className="form-recovery" href=".">
                  Forgot Password?
                </a>
              </div>
              <div className="form-group">
                <button type="submit">
                  <Link to="Home">sing up </Link>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <GoogleButton />
    </>
  );
}
