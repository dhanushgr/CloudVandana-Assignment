function sortDescending(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] < array[j]) {
                let temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        }
    }
    return array;
}

console.log(sortDescending([3, 1, 4, 1, 5, 9, 2, 6, 5])); // Example output: [9, 6, 5, 5, 4, 3, 2, 1, 1]