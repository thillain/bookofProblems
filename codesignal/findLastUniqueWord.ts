// We can use two sets with type annotations: wordsSet to maintain unique words and duplicatesSet to keep track of duplicate words. 
// By the end, we can remove all duplicated words from wordsSet to achieve our goal. 
// Here's how to use a set in TypeScript to solve the problem

function findLastUniqueWord(words: string[]): string {
    let wordsSet: Set<string> = new Set();
    let duplicatesSet: Set<string> = new Set();

    for (const word of words) {
        if (wordsSet.has(word)) {
            duplicatesSet.add(word);
        } else {
            wordsSet.add(word);
        }
    }

    for (let i = words.length - 1; i >= 0; i--) {
        if (!duplicatesSet.has(words[i])) {
            return words[i];
        }
    }

    return "";
}

// Alternate Solution
function findLastUniqueWord2(words: string[]): string {
    const wordCounts = new Map<string, number>();

    // Step 1: Count how many times each word appears
    for (const word of words) {
        wordCounts.set(word, (wordCounts.get(word) || 0) + 1);
    }

    // Step 2: Scan backward to find the first word that appears exactly once
    for (let i = words.length - 1; i >= 0; i--) {
        if (wordCounts.get(words[i]) === 1) {
            return words[i];
        }
    }

    // Step 3: Return empty string if everything is a duplicate
    return "";
}

// === Testing the code ===
const fruits = ["apple", "pear", "apple", "orange", "pear"];
const result = findLastUniqueWord(fruits);

console.log("Result:", result); 
// Output: "orange"
