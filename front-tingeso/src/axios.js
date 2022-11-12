const obtenerSueldos  = async () => {
    try{
        const respuesta = await axios.get('http://localhost:8081/sueldo/calcular')
        console.log(respuesta)
    }catch(error){
        console.log(error)
    }
}

const enviarJustificativo = async () => {
    try{
        const respuesta = await axios.post('http://localhost:8081/justificativo/xxxx')
        console.log(respuesta)
    }catch(error){
        console.log(error)
    }
}
