let numeros = [100,27,90,6,87]
//console.log(numeros.sort((a,b) => a - b));


function mySorty(array, compare = (a,b) => a - b){
   if (array.length <= 1) {
        return array;
    }

    let pivote = array[array.length - 1]
    let left = [];
    let right = [];

    for(let i = 0; i < array.length - 1; i++){
        if (compare(array[i], pivote) < 0) {
            left.push(array[i])
        }else{
            right.push(array[i])
        }
    }

    return [...mySorty(left, compare), pivote, ...mySorty(right, compare)]
}

console.log(mySorty(numeros));


//Bubble Sort
function bubbleSort(array){
    let n = array.length;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - 1; j++) {
            if (array[j] > array[j+1]) {
                [array[j], array[j + 1]] = [array[j + 1], array[j]]
            }
        }
    }
    return array;
}

let numerico = [21,412,5,12,4]
console.log(bubbleSort(numerico));
