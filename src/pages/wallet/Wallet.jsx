import Starts from "../componentes/Starts";

export default function Wallet() {
  return (
    <div className="container bg-dark">
      <div>
       <Starts></Starts>
        <div className="controls-Money d-flex text-center justify-content-center my-3 p-3 ">
            <button className="btn btn-enviar mx-3 text-white fw-bolder">Enviar</button>
            <button className="btn btn-retirar mx-3 text-white fw-bolder">Retirar</button>
            <button className="btn btn-info mx-3 text-white fw-bolder">Recargar</button>
            <button className="btn btn-historial mx-3 text-white fw-bolder">Apostar</button>
            <button className="btn btn-warning mx-3 text-white fw-bolder">prestar</button>
        </div>

        <div className="historial">
            <div className="hitorial-item">
            
            </div>
        </div>
      </div>
    </div>
  );
}
