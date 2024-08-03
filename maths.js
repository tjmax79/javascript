// Factorial: Write a function to calculate the factorial of a given number.

function factorial(n) {
    if (n < 0) {
        throw new Error("Factorial is not defined for negative numbers");
    }
    if (n === 0 || n === 1) {
        return 1;
    }
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

// Example usage
const number = 5;
console.log(`Factorial of ${number} is ${factorial(number)}`);  // Output: Factorial of 5 is 120


// Prime Number Check: Create a function to check if a number is prime or not.

function isPrime(n) {
    if (n <= 1) return false;
    if (n <= 3) return true;
    if (n % 2 === 0 || n % 3 === 0) return false;
    let i = 5;
    while (i * i <= n) {
        if (n % i === 0 || n % (i + 2) === 0) return false;
        i += 6;
    }
    return true;
}

// Example usage
const number = 29;
console.log(`Is ${number} a prime number? ${isPrime(number)}`);  // Output: Is 29 a prime number? True


// Fibonacci Sequence: Implement a function to generate the Fibonacci sequence up to a given number of terms. function fibonacci(n) {
    if (n <= 0) return [];
    if (n === 1) return [0];
    const sequence = [0, 1];
    while (sequence.length < n) {
        sequence.push(sequence[sequence.length - 1] + sequence[sequence.length - 2]);
    }
    return sequence;
}

// Example usage
const numTerms = 10;
console.log(`Fibonacci sequence with ${numTerms} terms: ${fibonacci(numTerms)}`);
// Output: Fibonacci sequence with 10 terms: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
