// Actividad 2 

// 1-Leer desde un endpoint --> FETCH

//1.1 - Reconfigurar los datos 

// 2-Escribir datos de un archivo local  tipo JSON

// 3-Leer datos del archivo 

import fsp from 'node:fs/promises'
import path from 'node:path'

try{
    const respuesta = await fetch('https://api.escuelajs.co/api/v1/users')
    const usuarios = await respuesta.json() //<---convierte JSON texto a objeto javascript

    const usuariosModificados = usuarios.map((usuario)=>{
        const usuariosModificado = {
            id: usuario.id,
            email: usuario.email,
            nombre: usuario.name
        }
        return usuariosModificado
    })

    //Escribimos
    const ruta = path.resolve('usuarios.json')
    const datosJson = JSON.stringify(usuariosModificados, null, 4)
    await fsp.writeFile(ruta, datosJson)

    const usuariosLocales = await fsp.readFile(ruta, 'utf8')
    console.log(usuariosLocales)
}
catch(error){
    console.log(error)

}