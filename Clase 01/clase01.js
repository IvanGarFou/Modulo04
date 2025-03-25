//Desestructuracion 
const numeros = [2,4,6,8,10];
const [a,b,c,d,e] = numeros;

console.log(e);

const colores = ["rojo", "verde", "azul"]
const [, segundoColor] = colores

console.log(segundoColor);


const persona = {
    nombre: "Ian",
    edad: 24,
    ciudad: "CDMX"
}

const {nombre: name, ciudad: city} = persona;
console.log(city);


