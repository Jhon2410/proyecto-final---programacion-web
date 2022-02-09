import axios from "axios"
const ar = ["hola"]
const getPaises = async ()=>{
    const respuesta = await axios.get("http://country.io/names.json")
    return respuesta.data[0]


}


module.exports = {
    getPaises,
    ar
}
