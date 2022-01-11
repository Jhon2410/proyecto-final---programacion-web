const { default: axios } = require("axios");

const base_url = "";


const getPaises = async ()=>{
    const respuesta = await axios.get("http://country.io/names.json")
    return respuesta


}

const validar_servicio = (e) =>{
    alert(base_url)
}

//usuario

//leer usuario

const getAllUsers_services = () =>{


}

//crear usuario

const PostUsers_services = () =>{
    

}
//actuaolizar usuario

const PutUsers_services = () =>{
    

}
//eliminar usuario


const DeleteUsers_services = () =>{
    

}
module.exports = {getPaises,  validar_servicio, getAllUsers_services, PostUsers_services, PutUsers_services, DeleteUsers_services }