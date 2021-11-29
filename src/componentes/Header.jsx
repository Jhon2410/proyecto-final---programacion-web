export default function Header() {
  return (
    <div className="  mb-3 py-3 bg-white">
      <div className="container d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <div
          class="mx-3"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#menu-opciones"
          aria-controls="menu-opciones"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            fill="currentColor"
            class="bi bi-list"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
            />
          </svg>
        </div>

        <a
          href="/"
          className="d-flex align-items-center mb-2 mb-lg-0 text-dark text-decoration-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            fill="blue"
            className="bi bi-bootstrap-fill"
            viewBox="0 0 16 16"
          >
            <path d="M6.375 7.125V4.658h1.78c.973 0 1.542.457 1.542 1.237 0 .802-.604 1.23-1.764 1.23H6.375zm0 3.762h1.898c1.184 0 1.81-.48 1.81-1.377 0-.885-.65-1.348-1.886-1.348H6.375v2.725z" />
            <path d="M4.002 0a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4h-8zm1.06 12V3.545h3.399c1.587 0 2.543.809 2.543 2.11 0 .884-.65 1.675-1.483 1.816v.1c1.143.117 1.904.931 1.904 2.033 0 1.488-1.084 2.396-2.888 2.396H5.062z" />
          </svg>
        </a>

        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li>
            <a href="./" className="nav-link px-2 link-secondary d-none">
              Overview
            </a>
          </li>
        </ul>

        <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
          <input
            type="search"
            className="form-control col-12 search"
            placeholder="buscar "
            aria-label="Search"
          />
        </form>

        <div className="dropdown text-end">
          <i
            className="d-block link-dark text-decoration-none dropdown-toggle"
            id="dropdownUser1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
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
                class=" dropdown-item"
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
              <a className="dropdown-item" href="./">
                Sign out
              </a>
            </li>
          </ul>
        </div>
        <div
          class="offcanvas offcanvas-end"
          tabindex="-1"
          id="offcanvasRight"
          aria-labelledby="offcanvasRightLabel"
        >
          <div class="offcanvas-header">
            <h5 id="offcanvasRightLabel">configuracion</h5>
            <button
              type="button"
              class="btn-close text-reset"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div class="offcanvas-body">...</div>
        </div>
        <div
          class="offcanvas offcanvas-start w-25"
          tabindex="-1"
          id="menu-opciones"
          aria-labelledby="offcanvasRightLabel"
          data-bs-scroll="true" data-bs-backdrop="false"
        >
          <div class="offcanvas-header">
          {/*}
            <h5 id="offcanvasRightLabel">opciones</h5>
         {*/}
            <button
              type="button"
              class="btn-close text-reset"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div class="offcanvas-body">...</div>
        </div>
      </div>
    </div>
  );
}
