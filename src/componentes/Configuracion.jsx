import { useState } from "react";
import { useEffect } from "react";
import { connect } from "react-redux";


const Configuracion = ({paises, idioma}) => {
const [gepaises, setPaises] = useState([])
 

useEffect(()=>{
  (async()=>{
  
    const res =  await paises
    let todas = []
    for(let ban in res.data)
    {
      todas.push(res.data[ban])
    }
    setPaises(todas)

})()

},[])

  
const renderPaises = gepaises.map((pais) =>{
  return (
    <option>
      {pais}
    </option>
    )
})



return (
  <>
    <div className="w-100">
    su idiomas es : {idioma}
        <select>
       {renderPaises}
        </select>
    </div>
  </>
);


 
}

const mapStateToProps = state =>({
    puntos : state.puntos,
    paises : state.paises,
    idioma : state.idioma
  })
  
  const mapDispatchToProps= dispatch => ({
    reset(){
      dispatch({
        type : "reset_notify"
      })
  
    }
  })

export default connect(mapStateToProps, mapDispatchToProps)(Configuracion);
