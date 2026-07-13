// To find all the words from the first array that have an anagram in the second array, 
// we can utilize sorting and sets for efficient matching. Here's how we can implement this in TypeScript:

function sortCharacters(input: string): string {
    return [...input].sort().join('');
}

function findAnagrams(array1: string[], array2: string[]): string[] {
    let sortedWordsInArray2: Set<string> = new Set();
    array2.forEach(word => sortedWordsInArray2.add(sortCharacters(word)));

    let result: string[] = [];

    for (const word of array1){
        const sortedWord: string = sortCharacters(word);

        if(sortedWordsInArray2.has(sortedWord)) {
            result.push(word);
        }
    }

    return result;
}

// Testing the function.
let array1 = ["listen", "google"];
let array2 = ["inlets", "banana", "gogle"];

console.log(findAnagrams(array1, array2));