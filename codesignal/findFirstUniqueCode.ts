// You're given an array of strings where each string represents a product code made up of alphanumeric characters. 
// Your task is to identify the first product code in this list that is not repeated elsewhere. 
// If all product codes are repeated or the array is empty, simply return an empty string.

// It's your mission to find this first solitary code!

function findFirstUniqueCode(codes: string[]): string {
    const codesSet: Set<string> = new Set();
    const duplicatesSet: Set<string> = new Set();

    // TODO: Populate the sets with codes
    for (const word of codes) {
        if (codesSet.has(word)) {
            duplicatesSet.add(word)
        } else {
            codesSet.add(word);
        }
    }

    // TODO: find the first unique code

    for (let i = 0; i < codes.length; i++) {
        if (!duplicatesSet.has(codes[i])) {
            return codes[i];
        }
    }

    return "";
}

console.log(findFirstUniqueCode(["A1B2", "C3D4", "E5F6", "A1B2", "G7H8"])); // Expected "C3D4"
console.log(findFirstUniqueCode(["X1Y2", "Z3A4", "X1Y2", "Z3A4"])); // Expected ""
console.log(findFirstUniqueCode(["P9Q8", "R7T6", "U5V4", "W3S2", "U5V4"])); // Expected "P9Q8"