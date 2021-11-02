import { Link } from "react-router-dom"
import "./../../App.css";

export default function Login(){

    return(
        <>
        <div className="container mx-auto  col-10 col-md-6 shadow my-2 p-3 formulario-login rounded">
            <h1 className="text-center text-uppercase text-success">Login</h1>
            <form autoComplete="off" className="mx-10">
                <input type="text" placeholder="put your email here" autoComplete="off" className="col-12  form-control text-white py-3 my-3 " />
                <input type="password" placeholder="put your password here" className="col-12 shadow form-control text-white py-3 my-3"  />
                
                <input type="submit" value="iniciar session" className="btn btn-primary form-control col-12 text-white py-2" />
            </form>
            <h6 className="text-center col-12 ">
            <Link to="/register" >registrarme.</Link>
            </h6>

        </div>
        </>
    )
}