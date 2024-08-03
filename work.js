// a program to reverse a given string
function reverseString(s) {
    return s.split('').reverse().join('');
}

// Example usage
const inputString = "Hello, World!";
const reversedString = reverseString(inputString);
console.log(reversedString);

/