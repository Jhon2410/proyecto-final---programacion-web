import axios from "axios"
const ar = ["hola"]
const getPaises = async ()=>{
    // const respuesta = await axios.get("http://country.io/names.json")
    // return respuesta.data[0]


}

const geta =()=>{
    const respuesta = await axios.get("http://localhost:8080")
    return respuesta
}

module.exports = {
    getPaises,
    ar
}
