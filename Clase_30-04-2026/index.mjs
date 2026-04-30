import express from "express"

const PUERTO = 3000

const app = express()

const productos = [
    {
        id: 1,
        nombre: 'pantalon',
        precio: 50000 
    },

    {
        id: 2,
        nombre: 'remera',
        precio: 15000    
    }

]

// Parametros de ruta

app.get('/', (req, res)=>{
    res. json({mensaje:'Bienvenido'})
})

app.get('/productos', (req, res)=>{

    res. json(productos)
})

app.get('/productos/:id', (req, res)=>{

    const id = parseInt(req.params.id) // <----- viene como una cadena

    const productosFiltrados = productos.filter((producto)=>{
        return producto.id === id
    })

    res. json(productosFiltrados)
})

app.get('/productos_d/:descuento', (req, res)=>{

    const descuento = Number(req.params.descuento) // <----- viene como una cadena

    const productosDescuentos = productos.map((producto)=> {
        
        const calculo = producto.precio * descuento/100
        const final = producto.precio - calculo
        
        return {
            id: producto.id,
            nombre: producto.nombre,
            precio: final
        }
    })

    res. json(productosDescuentos)

})

app.listen(PUERTO)