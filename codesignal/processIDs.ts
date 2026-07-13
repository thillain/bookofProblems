// Write a function that sifts through this and pulls out only the unique IDs.
// This function will receive the original array as input and should return an array consisting solely of unique IDs. Think of it as a sorting mechanism that clears out repeat IDs, leaving only unique ones behind.
// Be cautious, as arrays can be unpredictable – they might be empty or filled to capacity. Your function must handle all cases. Ready to tackle the challenge?

function processIDs(ids: number[]): number[] {
    // TODO: return an array with only unique elements
    const set1 = new Set(ids);
    return Array.from(set1);
}

// Testing the function.
const ids = [1, 2, 3, 2, 1, 5, 3, 1, 2, 1, 4, 5, 6];
const uniqueIDs = processIDs(ids);
console.log(uniqueIDs); // It should return [1, 2, 3, 5, 4, 6]