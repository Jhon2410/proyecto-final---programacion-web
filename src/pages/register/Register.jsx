import { Link } from "react-router-dom";
import { createUser_services } from "../../servicios";
import GoogleButton from "../componentes/GoogleButton";

import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
export default function Register() {
  const [correo, setCorreo] = useState();
  const [password, setPassword] = useState();
  const [password2, setPassword2] = useState();
  const [paises, setPaises] = useState([]);
  const correoChange = (e) => {
    setCorreo(e.target.value);
  };
  const passwordChange = (e) => {
    setPassword(e.target.value);
  };
  const password2Change = (e) => {
    setPassword2(e.target.value);
  };

  const registrar = async (e) => {
    e.preventDefault();
    console.log("hola")
    if (password === password2) {
      const data = {
        usuario_username: correo,
        usuario_contraseña: password
      };
      const res = await createUser_services(data);
      console.log(res);
      document.getElementById("infoModal").click();
    } else {
      alert("las contraseñas np coinciden.");
    }
  };

  const enviarInfo =()=>{
  }

  const renderPaises = async () => {
    const res = await axios.get("/apis/paises.json");
    setPaises(res.data)
  };
  
  useEffect(async()=>{

    await renderPaises()
    console.log(paises)
  },[])

const renderCountries = paises.map((pais,index)=>{ return <option key={index} value={index} >{pais.name}         { pais.dial_code}</option>})
  return (
    <>
      <div
        className="modal fade"
        id="infoModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Next step
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body text-center">
              <form>
                <div className="mb-3">
                  <label htmlFor="recipient-name" className="col-form-label">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="recipient-name"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="last-name" className="col-form-label">
                    Last name
                  </label>
                  <input type="text" className="form-control" id="last-name" />
                </div>
                <div className="mb-3">
                  <label htmlFor="message-text" className="col-form-label">
                    country:
                  </label>
                  <select
                    className="form-select form-select-lg mb-3 l"
                    aria-label=".form-select-lg example"
                  >
                    <option defaultValue >select a country</option>
                    {renderCountries}
                  </select>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary w-100"
                onClick={enviarInfo}
              >
                Iniciar session
              </button>
              
            </div>
          </div>
        </div>
      </div>
     
      <div className="form">
        <div className="form-toggle"></div>
        <div className="form-panel one">
          <div className="form-header">
            <h1>Account sing up</h1>
          </div>
          <div className="form-content">
            <form onSubmit={registrar} method="POST">
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

                <label htmlFor="password2" className="mt-2 ">
                  Repeat Password
                </label>
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
                <button
                  type="submit"
                  id="btnCrearUsuario"
                  onClick={enviarInfo}
                >
                  sing up
                </button>

                <button
                  data-bs-toggle="modal"
                  data-bs-target="#infoModal"
                  data-bs-whatever="@mdo"
                  id="btnCrearUsuario"
                  hidden
                >
                  sing up
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
