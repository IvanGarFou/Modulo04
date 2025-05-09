const persona = {
    "nombre": "Ana",
    "edad": 25,
    "ciudad": "CDMX"
}


const jsonStr = JSON.stringify(persona)
console.log(jsonStr);

const jsonObj = JSON.parse(jsonStr)
console.log(jsonObj.nombre);
