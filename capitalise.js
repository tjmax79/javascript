// Capitalize Words: Implement a function that capitalizes the first letter of each word in a sentence.


function capitalizeWords(sentence) {
    return sentence
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}

// Example usage
const inputSentence = "hello world, this is a test.";
const capitalizedSentence = capitalizeWords(inputSentence);
console.log(capitalizedSentence);
