const transactions = [
    {id: 14356, client: "Ana Carrasco", monto: 96789, date: "2025-03-25", status: "completado"},
    {id: 79879, client: "Saul Hernandez", monto: 362456, date: "2025-03-24", status: "pendiente"},
    {id: 23462, client: "Ivan Fougerat", monto: 100, date: "2025-03-23", status: "rechazado"},
    {id: 52346, client: "Maria Galaz", monto: 798789, date: "2025-03-25", status: "completado"}
]

//Encontrar la primera transaccion completada
const firstTransaction = transactions.find(t => t.status === "completado")
console.log("Primera transaccion del mes completada: ", firstTransaction);

//Verificar si un cliente en especifico realizo una transaccion
const  clients = transactions.map(t => t.client);
const existIvan = clients.includes("Ivan Fougerat");
console.log("Ivan Fougerat tiene transacciones este mes? ", existIvan);

//Calcular el total de montos de las transacciones completadas
const total = transactions.filter(t => t.status === "completado").reduce((total, t) => total + t.monto, 0);
console.log("El monto total de transacciones es: ", total);

const rechazado = transactions.some(t => t.status === "rechazado");
console.log("Hay transacciones rechazadas?", rechazado);


//Transacciones mayores a 100000
const transactionMayor = transactions.filter(t => t.monto > 100000 && t.status === "pendiente")
console.log("Transacciones mayores que 100 000 ", transactionMayor);



//id, nombre, categoria, precio, envio, oferta, stock, vendidos
//Verificar si hay productos en oferta
//Encontrar el primer producto sin stock
//Verficar cuales productos tienen envio gratis
//Calcular el valor total de tu inventario
//Calcular el numero total de productos vendidos
//Obtener todos los producto de una categoria