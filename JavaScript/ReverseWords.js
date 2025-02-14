function reverseWords(sentence) {
    let words = sentence.split(" ");
    let reversedSentence = "";
    for (let word of words) {
        let reversedWord = "";
        for (let i = word.length - 1; i >= 0; i--) {
            reversedWord += word[i];
        }
        reversedSentence += reversedWord + " ";
    }
    return reversedSentence.trim();
}

console.log(reverseWords("This is a sunny day")); // Example output: "sihT si a ynnus yad"