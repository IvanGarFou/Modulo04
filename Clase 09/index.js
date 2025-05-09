async function taskSlow() {
    console.log('Esta iniciando la tarea!!');
    await new Promise(resolve => {
        setTimeout(() => {
            console.log('Tarea terminada en 5 segundos');
            resolve()
        }, 5000)
    })
    console.log('Termino la tarea');
}

function taskFast(){
    console.log("Hola Mundo! Se ejecuto primero"); 
}

taskSlow()
taskFast()

console.log('Inicio');

setTimeout(() => {
    console.log('Tarea finalizada');
},5000)

console.log('Fin');
