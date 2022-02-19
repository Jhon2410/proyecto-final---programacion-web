const axios = require("axios");

const base_url = "http://localhost:8080/";


const getPaises = async ()=>{
    const respuesta = await axios.get("http://country.io/names.json")
    return respuesta


}

const validar_servicio = (e) =>{
    alert(base_url + "usuarios/create/")
}

//usuario

//leer usuario

const getAllUsers_services = async (data) =>{
    
    const res = await axios({
        method: 'post',
        url: base_url + "usuarios/create/",
        data: data ? data : {}
      })

     console.log(res.data)
     return res

}
getAllUsers_services()

//crear usuario

const createUser_services = async (data) =>{
    
    const res = await axios({
        method: 'post',
        url: base_url + "usuarios/create/",
        data: data ? data : {}
      })

     console.log(res.data)
     return res

}

//
const PostUsers_services = async (user) =>{
   
    const  res = await axios.get(base_url + "usuarios/a/");
    console.log(res)
    return res;
}
//actuaolizar usuario

const PutUsers_services = () =>{
    

}
//eliminar usuario


const DeleteUsers_services = () =>{
    

}
module.exports = {getPaises, createUser_services, validar_servicio, getAllUsers_services, PostUsers_services, PutUsers_services, DeleteUsers_services }