import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
export default function Header({estado}) {
  const [redirect, setredirect] = useState(estado?estado:false);
  const salir=()=>{
    localStorage.removeItem("session");
  }
  useEffect(() => {
    if (window.location.pathname !== "/login") {
      if (localStorage.getItem("session") === null) {
        setredirect(true);
      }
    }
  }, []);
  return (
    <div className="  mb-3 py-2 bg-white ">
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

        <div className="d-flex align-items-center col-6 mb-2 mb-lg-0 text-dark text-decoration-none">
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

        <div className="dropdown text-end ml-3  col-4 mr-2 ">
          <i>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              fill="currentColor"
              className="bi bi-bell-fill"
              viewBox="0 0 16 16"
            >
              <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z" />
            </svg>
            <span className="  translate-middle badge rounded-pill bg-danger">
              99+
            </span>
          </i>

          <i
            className=" link-dark text-decoration-none dropdown-toggle"
            id="dropdownUser1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <span className="mx-2">Jhon anderson</span>

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
          <div className="offcanvas-body">...</div>
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
}
