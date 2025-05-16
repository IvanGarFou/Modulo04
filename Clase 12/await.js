function obtenerProducto(){
    return new Promise(resolve => {
        setTimeout(() => {
            resolve([
                {id:1, nombre:'Macbook Pro 13'},
                {id:2, nombre:'Hp Notebook'}
            ])
        },1000)
    })
}

function obtenerInformacion(id) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({id, descripcion: 'Laptop Ultimo Modelo', precio: 24000})
        },1000)
    })
}

async function mostrarInfo() {
    try{
        const producto = await obtenerProducto()
        console.log('Productos en Stock: ', producto);
        const primerProducto = producto[0]
        const detalle = await obtenerInformacion(primerProducto.id)
        console.log('Detalle del Prodcto ', detalle);       
    }catch(error){
        console.error('Alerta Roja', error);
    }
}

mostrarInfo()