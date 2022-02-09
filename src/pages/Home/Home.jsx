import { connect } from "react-redux"
import AddPunts from "./AddPunts"

const  Home = ({puntos, add})=>{
    return (
        <div className="container text-center">
        <h1 className="text-center bg-dark">{puntos}</h1>
        <h1 className="text-center bg-dark">{puntos}</h1>
        <h1 className="text-center bg-dark">{puntos}</h1>
        <h1 className="text-center bg-dark">{puntos}</h1>
        <h1 className="text-center bg-dark">{puntos}</h1>
        <h1 className="text-center bg-dark">{puntos}</h1>
        <AddPunts></AddPunts>
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