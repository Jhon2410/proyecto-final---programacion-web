import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
const paginas = [
  {
    icono: "home",
    nombre: "home",
    url: "/home",
  },
  {
    icono: "user",
    nombre: "profile",
    url: "/user",
  },
  {
    icono: "movie-play",
    nombre: "videos",
    url: "/menu",
  },
  {
    icono: "store-alt",
    nombre: "Store",
    url: "/store-alt",
  },
  {
    icono: "chat",
    nombre: "chat",
    url: "/chat",
  },
  {
    icono: "money",
    nombre: "Wallet",
    url: "/money",
  },
];

export default function Main(props) {
  const generarMenu = paginas.map((link,index) => {
    let n = link.icono 
    if (n === props.pg) {
      return (
        <li key={index}>
          <Link to={ link.url} className={"nav-link scrollto  active"}>
            <i className={"bx bx-" + n}></i> <span>{n}</span>
          </Link>
        </li>
      );
    } else {
      return (
        <li key={index}>
          <Link to={ link.url} pg={n} className={"nav-link scrollto  "}>
            <i className={"bx bx-" + n}></i> <span>{link.nombre}</span>
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
        
        </ul>
      </nav>
    </header>
  );
}
