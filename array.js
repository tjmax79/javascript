// Find Maximum and Minimum: Write functions to find the maximum and minimum values in an array of numbers.

function findMaximum(arr) {
    return Math.max(...arr);
}

function findMinimum(arr) {
    return Math.min(...arr);
}

// Example usage
const numbers = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
const maximum = findMaximum(numbers);
const minimum = findMinimum(numbers);
console.log(`Maximum: ${maximum}`);
console.log(`Minimum: ${minimum}`);

// Sum of Array: Create a function that calculates the sum of all elements in an array.

function sumOfArray(arr) {
    return arr.reduce((sum, value) => sum + value, 0);
}

// Example usage
const numbers = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
const totalSum = sumOfArray(numbers);
console.log(`Sum of array: ${totalSum}`);


// Filter Array: Implement a function that filters out elements from an array based on a given condition.

function filterArray(array, condition) {
    return array.filter(condition);
}

// Example usage
const array = [1, 2, 3, 4, 5, 6];
const condition = (x) => x % 2 === 0;  // Keep even numbers
const filteredArray = filterArray(array, condition);
console.log(filteredArray);  // Output: [2, 4, 6]
