import { connect } from "react-redux"
import Publicacion from "../componentes/Publicacion"

const  Home = ({puntos, add})=>{
    return (
        <div className="">
        <Publicacion />
        </div>
    )
}
const mapStateToProps = state =>({
    puntos : state.puntos
})
const mapDispatchToProps = dispatch =>({
    add(){
        dispatch({
            type:"agregar",
            
        })
    }
})
export default connect(mapStateToProps, mapDispatchToProps)(Home)