import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import Stars from "../pages/componentes/Stars";
import Configuracion from "./Configuracion";
const Header = ({ estado, puntos, reset }) => {
  const [redirect, setredirect] = useState(estado ? estado : false);
  const salir = () => {
    localStorage.removeItem("session");
  };
  useEffect(() => {
    if (window.location.pathname !== "/login") {
      if (localStorage.getItem("session") === null) {
        setredirect(true);
      }
    }
  }, []);
  return (
    <div className="  mb-3 py-2 bg-white position-fixed myHeader">
      {redirect ? <Redirect push to="/login" /> : null}
      <div className=" d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <div
          className="px-3 col-1 text-end"
          data-bs-toggle="offcanvas"
          data-bs-target="#menu-opciones"
          aria-controls="menu-opciones"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            fill="black"
            className="bi bi-list"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
            />
          </svg>
        </div>
        <div className="d-sm-none   mx-2">
        <a href="./">
            <img src="WOR.svg" width="70" alt="logo" />
          </a>
          <i type="" className=" position-relative mx-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="blue"
              class="bi bi-search"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
          </i>
        </div>
        <div className="d-flex d-none   d-sm-flex align-items-center col-6 mb-2 mb-lg-0 text-dark text-decoration-none">
          <a href="./">
            <img src="WOR.svg" width="60" alt="logo" />
          </a>
          <div className="input-group mx-3 rounded border">
            <input
              type="search"
              className="se rounded p-2 form-control w-50 mw-50"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="search-addon"
            />
            <span
              className="input-group-text border-0 bg-white"
              id="search-addon"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="black"
                className="bi bi-search"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg>
            </span>
          </div>
        </div>

        <div className="dropdown text-end ml-3 d-flex  mr-2 ">
          <i type="" className=" position-relative mx-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              fill="green"
              class="bi bi-cart4"
              viewBox="0 0 16 16"
            >
              <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
            </svg>
            <span className="position-absolute top-0 start-0 translate-middle badge rounded-pill bg-success">
              2140
              <span className="visually-hidden"></span>
            </span>
          </i>

          <i type="" className=" position-relative mx-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              fill="yellow"
              className="bi bi-star-fill"
              viewBox="0 0 16 16"
            >
              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
            </svg>
            <span className="position-absolute top-0 start-0 translate-middle badge rounded-pill bg-warning">
              2140
              <span className="visually-hidden"></span>
            </span>
          </i>
          <i onClick={() => reset()}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              fill="red"
              className="bi bi-bell-fill"
              viewBox="0 0 16 16"
            >
              <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z" />
            </svg>
            {puntos > 0 ? (
              <span className="  translate-middle badge rounded-pill bg-danger">
                {puntos}
              </span>
            ) : (
              <span className=" d-none  translate-middle badge rounded-pill bg-danger">
                {puntos}
              </span>
            )}
          </i>

          <i type="" className=" position-relative mx-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              fill="blue"
              class="bi bi-chat-fill"
              viewBox="0 0 16 16"
            >
              <path d="M8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6-.097 1.016-.417 2.13-.771 2.966-.079.186.074.394.273.362 2.256-.37 3.597-.938 4.18-1.234A9.06 9.06 0 0 0 8 15z" />
            </svg>
            <span className="position-absolute top-0 start-0 translate-middle badge rounded-pill bg-primary">
              2140
              <span className="visually-hidden"></span>
            </span>
          </i>

          <i
            className=" link-dark text-decoration-none dropdown-toggle"
            id="dropdownUser1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <span className="mx-2 d-none d-sm-inline">Jhon anderson</span>

            <img
              src="https://github.com/mdo.png"
              alt="mdo"
              width="32"
              height="32"
              className="rounded-circle"
            />
          </i>
          <ul
            className="dropdown-menu text-small "
            aria-labelledby="dropdownUser1"
          >
            <li>
              <button
                className=" dropdown-item"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasRight"
                aria-controls="offcanvasRight"
              >
                configuracion
              </button>
            </li>
            <li>
              <a className="dropdown-item" href="./">
                Settings
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="./">
                Profile
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <Link to="Login" className="dropdown-item" onClick={salir}>
                Sign out
              </Link>
            </li>
          </ul>
        </div>

        <div
          className="offcanvas offcanvas-end"
          tabIndex="-1"
          id="offcanvasRight"
          aria-labelledby="offcanvasRightLabel"
        >
          <div className="offcanvas-header">
            <h5 id="offcanvasRightLabel">configuracion</h5>
            <button
              type="button"
              className="btn-close text-reset"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <Configuracion></Configuracion>
          </div>
        </div>

        <div
          className="offcanvas offcanvas-start w-25 "
          tabIndex="-1"
          id="menu-opciones"
          aria-labelledby="offcanvasRightLabel"
          data-bs-scroll="false"
          data-bs-backdrop="true"
        >
          <div className="offcanvas-header">
            {/*}
            <h5 id="offcanvasRightLabel">opciones</h5>
         {*/}
            <button
              type="button"
              className="btn-close text-reset"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">...</div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  puntos: state.puntos
});

const mapDispatchToProps = (dispatch) => ({
  reset() {
    dispatch({
      type: "reset_notify"
    });
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
