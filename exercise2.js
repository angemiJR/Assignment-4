function generateRandomArray(length) {
    const numbers = [];
    for (i = 0; i < length; i++) {
        numbers.push( Math.floor(Math.random() * 100)+1);
    }

    return numbers;
}

console.log(generateRandomArray(5));