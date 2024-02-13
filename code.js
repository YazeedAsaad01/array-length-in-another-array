let sentences = [
    "The quick brown fox jumps over the lazy dog.",
    "Programming languages provide powerful tools for developers.",
    "In a galaxy far, far away...",
    "Life is like a box of chocolates, you never know what you're gonna get.",
    "To be or not to be, that is the question.",
    "The sun sets in the west.",
    "The sky is blue on a clear day.",
    "Water is essential for all forms of life.",
    "The Earth revolves around the Sun.",
    "Practice makes perfect."
];

let stringLength = [];

const converter = (array) => {
    for(let i = 0; i < array.length; i++) {
        stringLength.push(array[i].length);
    }
    return stringLength;
}
converter(sentences);
console.log(stringLength);