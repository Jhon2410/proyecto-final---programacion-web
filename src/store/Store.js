import { createStore } from "redux"
const initialState = {
    puntos : 0,
    idioma : "Español",
    usuario: [],
    paises : ""

}



const reducerEn = (state=initialState , action)=>{
    console.log(action)
    if( state.puntos <=0 && action.type === "less"){
        return state;
    }
    switch(action.type){
        case "agregar":  return {...state, puntos : state.puntos+=1};
        case "less" :  return {
            ...state, puntos : state.puntos-=1
        }; 
        case "reset_notify" :  return { ...state , puntos : 0};
        default:return state ;
        
    }
    
}
export default createStore(reducerEn)