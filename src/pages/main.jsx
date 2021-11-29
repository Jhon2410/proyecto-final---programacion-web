const paginas = ["home","user"]
export default function Main(props) {
    const generarMenu = paginas.map(n=>{
            return(
            <li><a href={"#"+n} className={"nav-link scrollto home "}><i className={"bx bx-"+n }></i> <span>{n}</span></a></li>)

        })
    
   
  return (
    <header id="header" className="d-flex flex-column justify-content-center">

    <nav id="navbar" className="navbar nav-menu">
      <ul>
      {generarMenu}
        <li><a href="#resume" className="nav-link scrollto"><i className="bx bx-file-blank"></i> <span>Resume</span></a></li>
        <li><a href="#portfolio" className="nav-link scrollto"><i className="bx bx-book-content"></i> <span>Portfolio</span></a></li>
        <li><a href="#services" className="nav-link scrollto"><i className="bx bx-server"></i> <span>Services</span></a></li>
        <li><a href="#contact" className="nav-link scrollto"><i className="bx bx-envelope"></i> <span>Contact</span></a></li>
      </ul>
    </nav>

  </header>
  );
}
