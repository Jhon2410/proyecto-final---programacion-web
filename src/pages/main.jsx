import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
const paginas = [
  {
    icono: "home",
    nombre: " ",
    url: "/home",
  },
  {
    icono: "user",
    nombre: " ",
    url: "/user",
  },
  {
    icono: "file-blank",
    nombre: " ",
    url: "/file-blank",
  },
  {
    icono: "book-content",
    nombre: " ",
    url: "/user",
  },
  {
    icono: "server",
    nombre: " ",
    url: "/user",
  },
  {
    icono: "envelope",
    nombre: " ",
    url: "/user",
  },
];

export default function Main(props) {
  const generarMenu = paginas.map((link) => {
    let n = link.icono 
    if (n === props.pg) {
      return (
        <li>
          <Link to={ link.url} className={"nav-link scrollto  active"}>
            <i className={"bx bx-" + n}></i> <span>{n}</span>
          </Link>
        </li>
      );
    } else {
      return (
        <li>
          <Link to={ link.url} pg={n} className={"nav-link scrollto  "}>
            <i className={"bx bx-" + n}></i> <span>{n}</span>
          </Link>
        </li>
      );
    }
  });

  return (
    <header id="header" className="d-flex flex-column justify-content-center">
      <nav id="navbar" className="navbar nav-menu">
        <ul>
          {generarMenu}
          {/*}
        <li><a href="#resume" className="nav-link scrollto"><i className="bx bx-file-blank"></i> <span>Resume</span></a></li>
        <li><a href="#portfolio" className="nav-link scrollto"><i className="bx bx-book-content"></i> <span>Portfolio</span></a></li>
        <li><a href="#services" className="nav-link scrollto"><i className="bx bx-server"></i> <span>Services</span></a></li>
        <li><a href="#contact" className="nav-link scrollto"><i className="bx bx-envelope"></i> <span>Contact</span></a></li>
     {*/}
        </ul>
      </nav>
    </header>
  );
}
