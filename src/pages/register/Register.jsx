import { Link } from "react-router-dom"
import GoogleButton from "../componentes/GoogleButton";
import "./../../App.css";

export default function Register(){

    useEffect(() => {

    window.location.reload()
        
    }, []);
    return(
        <>
        <div className="container mx-auto  col-10 col-md-6 col-lg-4 shadow my-2 p-3 formulario-login rounded">
            <h1 className="text-center text-uppercase">Register</h1>
            <form autoComplete="off" className="mx-10">
            <input type="text" placeholder="nombres" autoComplete="off" className="col-6  form-control text-white py-3 my-3 " />
            <input type="text" placeholder="apellidos" autoComplete="off" className="col-6  form-control text-white py-3 my-3 " />

                <input type="text" placeholder="Escriba el correo" autoComplete="off" className="col-12  form-control text-white py-3 my-3 " />
                <input type="password" placeholder="Escriba la contraseña" className="col-12 shadow form-control text-white py-3 my-3"  />
                <input type="password" placeholder="Escriba la contraseña nuevamente" className="col-12 shadow form-control text-white py-3 my-3"  />
               <label htmlFor="fecha" className="text-success text-uppercase">fecha de nacimiento</label>
                <input type="date"  name="fecha" className="col-12 shadow form-control text-white py-3 my-3"  />
                <input type="submit" value="iniciar session" className="btn btn-primary form-control col-12 text-white py-2" />
            </form>
            <h6 className="my-3">
            <GoogleButton className="w-100 col-12"/>

            </h6>
            <h6 className="text-center col-12 ">
            <Link to="/login" >iniciar sessión</Link>
            </h6>
        </div>
        </>
    )
}