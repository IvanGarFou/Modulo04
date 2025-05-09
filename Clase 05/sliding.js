//Sliding Window
function maximoSubarray(array, U){
    let inicio = 0, sumatoria = 0, maxLength = 0, subarray = [];

    for (let fin = 0; fin < array.length; fin++) {
        sumatoria += array[fin]
        while (sumatoria > U) {
            sumatoria -= array[inicio];
            inicio++;
        }
        if (maxLength < fin - inicio + 1) {
            maxLength = Math.max(maxLength, fin - inicio + 1)
            subarray = array.slice(inicio, fin + 1)
        }
    }
    return {maxLength, subarray}
}

const array = [2,4,5,1,2,4,5]
const U = 7
console.log((maximoSubarray(array, U)));

