const tareaJSON = `[
    {"id": 13, "titulo": "Dar Clases"},
    {"id": 12, "titulo": "Cenar"},
    {"id": 11, "titulo": "Dormir"}
]`

function cargarTareas(callback) {
    const tareas = JSON.parse(tareaJSON)
    callback(tareas)
}

function mostrar(tareas){
    tareas.forEach(tarea => {
        console.log(tarea.titulo);
    });
}

cargarTareas(mostrar)