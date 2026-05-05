import express from "express"

const PUERTO = 3000

const app = express()

const validacioncodigo = async(req, res, next) =>{
    const codigo = Number(req.params.codigo)

    //1- fetch ->
    const respuesta = await fetch('http://localhost:4321/usuario')
    //objeto

    const usuario = respuesta.json()

    if(usuario.codigo === codigo){
        return next()
    }
    else{
        res.status(404).json({mensaje: "El codigo es incorrecto"})
    }
    
}

//Definir ruta GET /:codigo
//peticion -> middleware -> callback final

app.get('/:codigo', validacioncodigo,(req, res)=>{
    res.status(200).json({mensaje: "El codigo es correcto"})
})