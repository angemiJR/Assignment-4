
function sumEvenNumbers(array) {
    let sum = 0;
    for (i = 0; i < array.length; i++) {
        if (array[i] % 2 == 0) {
            sum = sum + array[i];
        } 

    }

    return sum;
}

console.log(sumEvenNumbers([2, 5, 6, 4]));
console.log(sumEvenNumbers([2, 4, 6, 8]));
console.log(sumEvenNumbers([1, 3, 5, 7]));
console.log(sumEvenNumbers([]));