import { connect } from "react-redux"

const AddPunts =({add, less})=>(
    <div>
    <button className="btn btn-success m-5" onClick={()=>add()}>add</button>
    <button className="btn btn-danger m-5" onClick={()=>less()}>less</button>

    </div>
)
const mapStateToProps = state =>({
    puntos : state.puntos
})
const mapDispatchToProps = dispatch =>({
    add(){
        dispatch({
            type:"agregar",
            
        })
    },
    less(){
        dispatch({
            type : "less"

        })
    }
})
export default connect(mapStateToProps, mapDispatchToProps)(AddPunts)